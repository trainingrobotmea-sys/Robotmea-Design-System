Add-Type -AssemblyName System.Drawing

function Trim-Logo {
    param(
        [string]$InPath,
        [string]$OutPath
    )

    $orig = [System.Drawing.Bitmap]::FromFile($InPath)
    $origW = $orig.Width
    $origH = $orig.Height

    # Downsize for fast scanning
    $maxDim = 320
    $scale = [Math]::Min(1.0, $maxDim / [Math]::Max($origW, $origH))
    $downW = [Math]::Max(1, [int]($origW * $scale))
    $downH = [Math]::Max(1, [int]($origH * $scale))

    $down = New-Object System.Drawing.Bitmap $downW, $downH, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($down)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($orig, 0, 0, $downW, $downH)
    $g.Dispose()

    # Detect alpha usage: sample a grid of pixels for any alpha < 250
    $hasAlpha = $false
    for ($y = 0; $y -lt $downH -and -not $hasAlpha; $y += 3) {
        for ($x = 0; $x -lt $downW -and -not $hasAlpha; $x += 3) {
            if ($down.GetPixel($x, $y).A -lt 250) { $hasAlpha = $true }
        }
    }

    # Background color = average of 4 corners
    $corners = @($down.GetPixel(0,0), $down.GetPixel($downW-1,0), $down.GetPixel(0,$downH-1), $down.GetPixel($downW-1,$downH-1))
    $bgR = [int](($corners | ForEach-Object { $_.R }) | Measure-Object -Average).Average
    $bgG = [int](($corners | ForEach-Object { $_.G }) | Measure-Object -Average).Average
    $bgB = [int](($corners | ForEach-Object { $_.B }) | Measure-Object -Average).Average

    $minX = $downW; $maxX = -1; $minY = $downH; $maxY = -1
    $colorThreshold = 28
    $alphaThreshold = 14

    for ($y = 0; $y -lt $downH; $y++) {
        for ($x = 0; $x -lt $downW; $x++) {
            $p = $down.GetPixel($x, $y)
            $isInk = $false
            if ($hasAlpha) {
                if ($p.A -gt $alphaThreshold) {
                    # also require some color distance in case of semi-transparent bg fill
                    $isInk = $true
                }
            } else {
                $dist = [Math]::Sqrt([Math]::Pow($p.R-$bgR,2) + [Math]::Pow($p.G-$bgG,2) + [Math]::Pow($p.B-$bgB,2))
                if ($dist -gt $colorThreshold) { $isInk = $true }
            }
            if ($isInk) {
                if ($x -lt $minX) { $minX = $x }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }

    $down.Dispose()

    if ($maxX -lt 0) {
        Write-Host "No ink detected in $InPath, skipping trim."
        $orig.Dispose()
        return
    }

    # Dilate by 2px in downsized space to avoid clipping AA edges, clamp
    $minX = [Math]::Max(0, $minX - 2)
    $minY = [Math]::Max(0, $minY - 2)
    $maxX = [Math]::Min($downW - 1, $maxX + 2)
    $maxY = [Math]::Min($downH - 1, $maxY + 2)

    $scaleX = $origW / $downW
    $scaleY = $origH / $downH

    $oMinX = [Math]::Max(0, [int]([Math]::Floor($minX * $scaleX)))
    $oMinY = [Math]::Max(0, [int]([Math]::Floor($minY * $scaleY)))
    $oMaxX = [Math]::Min($origW, [int]([Math]::Ceiling(($maxX + 1) * $scaleX)))
    $oMaxY = [Math]::Min($origH, [int]([Math]::Ceiling(($maxY + 1) * $scaleY)))

    $cropW = $oMaxX - $oMinX
    $cropH = $oMaxY - $oMinY

    $cropRect = New-Object System.Drawing.Rectangle $oMinX, $oMinY, $cropW, $cropH
    $cropped = $orig.Clone($cropRect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $orig.Dispose()

    $pad = [int]([Math]::Round(0.10 * [Math]::Max($cropW, $cropH)))
    $finalW = $cropW + 2 * $pad
    $finalH = $cropH + 2 * $pad

    $final = New-Object System.Drawing.Bitmap $finalW, $finalH, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g2 = [System.Drawing.Graphics]::FromImage($final)
    $g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g2.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    if ($hasAlpha) {
        $g2.Clear([System.Drawing.Color]::Transparent)
    } else {
        $g2.Clear([System.Drawing.Color]::White)
    }
    $g2.DrawImage($cropped, $pad, $pad, $cropW, $cropH)
    $g2.Dispose()
    $cropped.Dispose()

    $final.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $final.Dispose()

    Write-Host "$InPath -> $OutPath  (orig ${origW}x${origH}, crop ${cropW}x${cropH}, pad $pad, hasAlpha=$hasAlpha)"
}

$dir = "D:\Nauman Complete Data - October 2025\Official Drive\Office Works\Robotmea Edutech\Marketing\2026\Website\V1 - File\Robotmea Design System\assets\partners"

Trim-Logo "$dir\robotron.png"  "$dir\robotron-trimmed.png"
Trim-Logo "$dir\minirobot.png" "$dir\minirobot-trimmed.png"
Trim-Logo "$dir\neopia.png"    "$dir\neopia-trimmed.png"
Trim-Logo "$dir\sinion.jpeg"   "$dir\sinion-trimmed.png"
Trim-Logo "$dir\tdme.png"      "$dir\tdme-trimmed.png"
Trim-Logo "$dir\esim-gen.png"  "$dir\esim-gen-trimmed.png"
