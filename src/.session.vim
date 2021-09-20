let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/program/ai/test/ai-test/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +8 index.js
badd +22 App.js
badd +2 Utility.js
badd +1 pages/LinearRegression.js
badd +29 components/LinearRegression/LrSketch.js
badd +43 components/LinearRegression/linearRegression.js
badd +26 pages/MainPage.js
badd +21 Routes.js
badd +23 components/ui/Typography.js
badd +1 pages/QuadraticRegression.js
badd +68 components/QuadraticRegression/quadraticRegression.js
badd +30 components/QuadraticRegression/QrSketch.js
badd +17 pages/PolynomialRegression.js
badd +1 components/PolynomialRegression/polynomialRegression.js
badd +37 components/PolynomialRegression/PrSketch.js
argglobal
%argdel
edit components/PolynomialRegression/PrSketch.js
argglobal
balt pages/MainPage.js
let s:l = 57 - ((34 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 57
normal! 020|
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
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
