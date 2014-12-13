Set WshShell = CreateObject("WScript.Shell" )
WshShell.Run chr(34) & "C:\xampp\htdocs\dev-ruby\bursa\bin\bursa.bat" & Chr(34), 0
Set WshShell = Nothing