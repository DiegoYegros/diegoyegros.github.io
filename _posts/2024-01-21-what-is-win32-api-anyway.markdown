---
layout: post
title: "What is Win32 API anyway?"
date: 2024-01-21 11:37:00 -0400
categories: linux windows mac api software
---
### So what is Win32 API anyway?
Windows API (used to be Win32 API) is Microsoft's core set of APIs available in Windows systems.
### The functions provided by the Windows API can be grouped into eight categories
1. Base Services
2. Advanced Services
3. Graphics Device Interface
4. User Interface
5. Common Dialog Box Library
6. Common Control Library
7. Windows Shell
8. Network Services

### History of Windows API
1. `For example, a beginning C programmer will often write the simple "hello world" as their first assignment. The working part of the program is only a single printf line within the main subroutine. The overhead for linking to the standard I/O library is also only one line:`
<code>#include <stdio.h></code>
   <pre><code>int main(void) {
           printf("Hello, World!\n");
   }</code></pre>

    `The Windows version was still only one working line of code but it required many, many more lines of overhead. Charles Petzold, who wrote several books about programming for the Windows API, said: "The original hello world program in the Windows 1.0 SDK was a bit of a scandal. HELLO.C was about 150 lines long, and the HELLO.RC resource script had another 20 or so more lines. (...) Veteran programmers often curled up in horror or laughter when encountering the Windows hello-world program.`

2. The Windows API for Windows 1.0 supported fewer than 450 function calls, whereas modern versions of the API support thoousands.
3. Back in the days (Windows 95) they took backward compatibility really seriously.

### The Wine Project
The wine project provides a Win32 API compatibility layer for Unix-lke platforms, between Linux Kernel API and programs written for the Windows API. 

### Compiler Support
For a time, Visual Studio was the only IDE that could handle the Microsoft Platform SDK (compilers, tools, libraries and headers). As of 2024, MinGW and Cygwin projects also provide such an environment based on the GNU Compiler Collection (GCC).

### Great stuff - Now, what's the equivalent on Linux?
There isn't.
First, remember that Linux is the Kernel only.
There are many APIs developed by different teams. For instance, APIs for graphic user interfaces are QT, GTK, X11. I guess the lowest level library responsible for creating windows you can get is Xlib. But again, Linux is just the kernel. You don't need any windowing environment at all.
GNU implements all of the functions specified in ISO/IEC 9945-1:1996, the POSIX System Application Program Interface, commonly referred to as POSIX. A POSIX Library is a collection of functions that are used to perform various operations such as file I/O, process creation and manipulation, and memory managment.
So, the equivalent may be some GNU libraries and other GUI libraries.

For macOS, there's no direct equivalent either, for OS X, you have Cocoa Framweork which consists of the Foundation and AppKit libraries, which are Objective-C libraries. Mac is Unix-based, largely but not entirely FreeBSD, so there you have a bunch of other APIs.

Windows API is far superior than what's available on GNU/Linux and macOS. Linux is just a f* mess, and I've seen game developers crying about how awful Windows API has become, but still, it is the best thing available.

### Wait, so is this the reason why gaming is widely available just on Windows?
No.
Windows just has a bigger marketshare, we could discuss the reasons, but that's mainly why game developers do it for Windows.
Also, who wants to maintain a game for 10 different distros && Wayland or Xorg?

Most developers don't use Windows API directly anyway. They use other frameworks like .NET, which is a subset of Win API and can support multi platform execution (Mono). For developing drivers and low level stuff on Windows, use Windows API.