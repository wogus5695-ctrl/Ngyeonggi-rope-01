Add-Type -AssemblyName System.Drawing

$inputPath = "C:\Users\wogus\.gemini\antigravity\brain\eed6d775-38d3-4675-a8bf-4deceaf69964\media__1780892205403.jpg"
$outputPath = ".\public\og-image.png"

# Create directory if not exists
if (-not (Test-Path ".\public")) {
    New-Item -ItemType Directory -Force -Path ".\public"
}

Write-Host "Loading source image..."
$srcBmp = New-Object System.Drawing.Bitmap($inputPath)

# 1. Create blurred background
Write-Host "Creating blurred background..."
$smallBmp = New-Object System.Drawing.Bitmap(32, 18)
$gSmall = [System.Drawing.Graphics]::FromImage($smallBmp)
$gSmall.DrawImage($srcBmp, 0, 0, 32, 18)
$gSmall.Dispose()

# 2. Setup 1200x630 canvas
$destBmp = New-Object System.Drawing.Bitmap(1200, 630)
$g = [System.Drawing.Graphics]::FromImage($destBmp)

$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# Draw blurred background stretched
$g.DrawImage($smallBmp, 0, 0, 1200, 630)
$smallBmp.Dispose()

# Overlay semi-transparent dark mask (45% opacity) to darken the background
$darkBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(115, 15, 23, 42)) # Slate 900 color with alpha
$g.FillRectangle($darkBrush, 0, 0, 1200, 630)
$darkBrush.Dispose()

# Draw original 1:1 image in the center (630x630)
# Center x is (1200 - 630) / 2 = 285
Write-Host "Overlaying centered source image..."
$g.DrawImage($srcBmp, 285, 0, 630, 630)

# Save the resulting image as PNG
Write-Host "Saving OG Image..."
$destBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

# Cleanup
$g.Dispose()
$destBmp.Dispose()
$srcBmp.Dispose()

Write-Host "OG Image generated successfully at $outputPath"
