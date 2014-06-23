Required Graphics to Compile Build for Apple iOS
XDK Release 4.0.0 (Q1 2014)


This ReadMe is intended as documentation of and basic technical specifications for 
the graphics files that must be uploaded with your app build for Apple.


--------------------------------------------------------------------------------------
Graphics Required for Builds
--------------------------------------------------------------------------------------
iOS App for iPhone:
* LAUNCH ICON 1 [60x60 pixels; PNG format, no alpha transparency]
* LAUNCH ICON 2 [120x120 pixels; PNG format, no alpha transparency]
* PORTRAIT SPLASH SCREEN 1 [320X460 pixels; PNG format, no alpha transparency]
* PORTRAIT SPLASH SCREEN 2 [640X1096 pixels; PNG format, no alpha transparency]
---OR----
* LANDSCAPE SPLASH SCREEN 1 [480X300 pixels; PNG format, no alpha transparency]
* LANDSCAPE SPLASH SCREEN 2 [1136X600 pixels; PNG format, no alpha transparency]

iOS App for iPad:
* LAUNCH ICON 1 [76x76 pixels; PNG format, no alpha transparency]
* LAUNCH ICON 2 [152x152 pixels; PNG format, no alpha transparency]
* PORTRAIT SPLASH SCREEN 1 [768X1004 pixels; PNG format, no alpha transparency]
* PORTRAIT SPLASH SCREEN 2 [1536X2008 pixels; PNG format, no alpha transparency]
---OR----
* LANDSCAPE SPLASH SCREEN 1 [1024X748 pixels; PNG format, no alpha transparency]
* LANDSCAPE SPLASH SCREEN 2 [2048X1496 pixels; PNG format, no alpha transparency]


--------------------------------------------------------------------------------------
Graphics for Submission to the App Store
--------------------------------------------------------------------------------------
iOS App for iPhone & iPod Touch:
* APPLE APP STORE GRAPHIC [1024x1024 pixels; PNG format, no alpha]
* TOOLBAR AND NAVIGATION BAR ICON (optional) [~44x44 pixels; PNG format, no alpha]
* TAB BAR ICON (optional) [~50x50 pixels; PNG format, no alpha]

* SCREENCAPS: You must include at least one screencap per target device 
to the App Store. If you are only submitting for iPhone/iPod Touch, you only
need to submit a single screencap. If you are only submitting for iPad, you only
need to submit a single screencap. If you are submitting a universal iOS app,
you need two screencaps: one from an iPhone/iPod Touch and one from an iPad.

iOS App for 3.5-inch iPhone and iPod Touch Retina:
Portrait: 640x920 pixels (min), 640x960 pixels (max)
Landscape: 960x600 pixels (min), 960x640 pixels (max)

iOS App for 4-inch iPhone 5 and iPod touch (5th generation) Retina:
Portrait: 640x1136 pixels (min), 640x1096 pixels (max)
Landscape: 1136x600 pixels (min), 1136x640 pixels (max)

iOS App for iPad:
Portrait 1: 768x1004 pixels (min), 768x1024 pixels (max)
Portrait 2: 1536x2008 pixels (min), 1536x2048 pixels (max)
Landscape 1: 1024x748 pixels (min), 1024x768 pixels (max)
Landscape 2: 2048x1496 pixels (min), 2048x1536 pixels (max)
DO NOT include the iPhone status bar in any of your screencaps.


--------------------------------------------------------------------------------------
Included Sample Graphics
--------------------------------------------------------------------------------------
This .ZIP file includes sample graphics you can use as placeholders or templates for 
creating your graphics. To use them as templates, open them in your graphics editing 
program and replace the existing art with your own. Then save the file in its original 
format, using the original document name. 


--------------------------------------------------------------------------------------
Technical Considerations
--------------------------------------------------------------------------------------
Even though Apple device resolutions differ from the native (72ppi) resolution
of most computer monitors, as long as your graphics are saved at the specified pixel
dimensions, they should render correctly on device.

Please save your launch icon and splash/loading screens as 32-bit non-interlaced PNG
files. Apple does not allow the use of transparency in launch icons. 

These graphics are written into the actual binary of the app build that will
be returned to you when the build process is complete, they are written into the 
app, itself. That means they are downloaded to user devices during installation 
and will not need to be downloaded at each launch.

DO NOT CHANGE THE EXTENSIONS IN THE FILE NAMES OF YOUR GRAPHICS.
Simply changing the extension of the file will not create properly formatted graphics
and can cause the build process to fail. For instance, if you create your splash 
screen and save it as a TIF file and change the file name from "splash_iphone.tif" 
to "splash_iphone.png" and then attempt a build, that build will fail. Please save 
or export your graphics from a suitable graphics program, such as Adobe Photoshop 
or Fireworks.


--------------------------------------------------------------------------------------
More Information
--------------------------------------------------------------------------------------
The Apple developer website specifies a number of alternate sizes for launcher icons 
that are not necessary for our build. It also discusses styling considerations
for how to make your launcher icon fit in with the look-and-feel of the iOS GUI.

At the time of the this edit of the graphics ReadMe, that documentation could be found here:
https://developer.apple.com/library/ios/documentation/userexperience/conceptual/MobileHIG/IconMatrix.html

