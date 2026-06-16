Add-Type -AssemblyName System.Drawing

$p = "D:\Nauman Complete Data - October 2025\Official Drive\Office Works\Robotmea Edutech\Marketing\2026\Website\V1 - File\Robotmea Design System\assets\partners\tdme-trimmed.png"
$bytes = [System.IO.File]::ReadAllBytes($p)
$ms = New-Object System.IO.MemoryStream(,$bytes)
$src = [System.Drawing.Bitmap]::FromStream($ms)
$b = New-Object System.Drawing.Bitmap $src
$src.Dispose()
$ms.Dispose()
$w = $b.Width
$h = $b.Height

$bgR = 230; $bgG = 230; $bgB = 230
$lowT = 6      # distance below this => fully transparent
$highT = 40    # distance above this => fully opaque (keep original alpha)

for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $px = $b.GetPixel($x, $y)
        if ($px.A -eq 0) { continue }
        $dist = [Math]::Sqrt([Math]::Pow($px.R-$bgR,2) + [Math]::Pow($px.G-$bgG,2) + [Math]::Pow($px.B-$bgB,2))
        if ($dist -le $lowT) {
            $b.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $px.R, $px.G, $px.B))
        } elseif ($dist -lt $highT) {
            $t = ($dist - $lowT) / ($highT - $lowT)
            $newA = [int]([Math]::Round($px.A * $t))
            $b.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($newA, $px.R, $px.G, $px.B))
        }
    }
}

$b.Save($p, [System.Drawing.Imaging.ImageFormat]::Png)
$b.Dispose()
Write-Host "Done de-keying tdme-trimmed.png"
