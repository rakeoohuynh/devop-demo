def tinh_dtb_va_in(toan, ly, hoa):
    dtb = (toan+ly+hoa)/3
    print(f'Diem tb la: {round(dtb,2)}')

toan = int(input('Nhap diem toan: '))
ly= int(input('Nhap diem ly: '))
hoa = int(input('Nhap diem hoa: '))

tinh_dtb_va_in(toan, ly, hoa)
