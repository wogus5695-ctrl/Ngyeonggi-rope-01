Add-Type -AssemblyName System.Drawing

$inputPath = "C:\Users\wogus\.gemini\antigravity\brain\eed6d775-38d3-4675-a8bf-4deceaf69964\media__1780892019262.png"
$outputDir = ".\public"

if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Force -Path $outputDir
}

# Function to resize image
function Resize-Image {
    param (
        [string]$InPath,
        [string]$OutPath,
        [int]$Width,
        [int]$Height
    )
    $srcBmp = New-Object System.Drawing.Bitmap($InPath)
    $destBmp = New-Object System.Drawing.Bitmap($Width, $Height)
    $g = [System.Drawing.Graphics]::FromImage($destBmp)
    
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    
    $g.DrawImage($srcBmp, 0, 0, $Width, $Height)
    
    $destBmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $g.Dispose()
    $destBmp.Dispose()
    $srcBmp.Dispose()
}

# 1. Save PNGs
Write-Host "Creating PNG icons..."
Resize-Image -InPath $inputPath -OutPath "$outputDir\icon-16x16.png" -Width 16 -Height 16
Resize-Image -InPath $inputPath -OutPath "$outputDir\icon-32x32.png" -Width 32 -Height 32
Resize-Image -InPath $inputPath -OutPath "$outputDir\apple-touch-icon.png" -Width 180 -Height 180
Resize-Image -InPath $inputPath -OutPath "$outputDir\og-image.png" -Width 512 -Height 512

# 2. Save ICO (favicon.ico)
Write-Host "Creating favicon.ico..."
$srcBmp = New-Object System.Drawing.Bitmap($inputPath)
# Resize to 32x32 for ico
$icoBmp = New-Object System.Drawing.Bitmap(32, 32)
$g = [System.Drawing.Graphics]::FromImage($icoBmp)
$g.DrawImage($srcBmp, 0, 0, 32, 32)

$hIcon = $icoBmp.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($hIcon)
$stream = [System.IO.File]::Create("$outputDir\favicon.ico")
$icon.Save($stream)
$stream.Close()

$g.Dispose()
$icoBmp.Dispose()
$srcBmp.Dispose()

Write-Host "Favicons generated successfully!"
