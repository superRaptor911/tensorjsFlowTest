let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/program/ai/test/ai-test-new/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +2 App.js
badd +7 Routes.js
badd +11 pages/LinearRegression.js
badd +46 components/LinearRegression/LrSketch.js
badd +14 pages/MainPage.js
badd +2 common/p5Util.js
badd +65 components/PolynomialRegression/PrSketch.js
badd +55 components/QuadraticRegression/QrSketch.js
badd +6 Utility.js
argglobal
%argdel
edit components/PolynomialRegression/PrSketch.js
argglobal
balt components/QuadraticRegression/QrSketch.js
let s:l = 65 - ((23 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 65
normal! 011|
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0&& getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
