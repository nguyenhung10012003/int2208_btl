# Dự án app nghe nhạc: ONE MUSIC
# Introdution
    Thành viên nhóm:
        - Hoàng Bảo Khanh (trưởng nhóm) 
        - Nguyễn Đức Hùng 
        - Triệu Thanh Tùng 
        - Ngô Đăng Huy 
# Descreption
 Hiện nay, xu thế giải trí ngày càng phát triển. Nắm bắt được tình trạng đấy, nhóm chúng em phát triển 1 app nghe nhạc trực tuyến giúp người dùng giải trí dễ dàng hơn, phù hợp nhu cầu đa số mọi người. App có đầy đủ các tính năng cơ bản của 1 app nghe nhạc, hỗ trợ người dùng có trải nghiệm tốt nhất có thể.

# Các bước cài đặt project
* Điều kiện tiên quyết:
    -  NodeJs: Cần tải Node.js từ trang chính thức. Quá trình cài đặt sẽ cung cấp Node.js runtime và npm (Node Package Manager).
    -  Môi trường phát triển (IDE): Có thể dùng bất kỳ môi trường phát triển tích hợp nào như Visual Studio Code, WebStorm hoặc Atom. Trong trường hợp này ta sẽ sử dụng Visual Studio Code.

*  Các bước cài đặt:
        - Clone repo về máy
        - Mở terminal nhập npm install(nếu lỗi thiếu thư viện thì lại nhập vô)
        - Nhập npm start -> enter (hoặc sử dụng yarn start - nên dùng yarn)
        - Sau khi tiến trình kết thúc nếu có thư mục node_modules tức là đã cài thành công

# Cấu trúc dự án:
* Thư mục public: nơi chứa file index.html, các hình ảnh, icon, tài nguyên tĩnh.
* Thư mục src: nơi chứa các logic của dự án, các tài nguyên động, gồm cả code phần FE và BE.
   - Thư mục 'api' chứa các api của dự án.
   - Thư mục components: nơi chứa các components
   - Thư mục pages: chứa tài nguyên của từng page.
   - Thư mục routes: chứa đường link, các phương thức truy cập vào các page
   - Thư mục server:  folder controllers, database, molders, routers --> xử lí yêu cầu từ ent.

# Một số framework làm front-end:
* ReactJs
* Webpack
* Boostrap
* PixiJS
* 
# Định hướng làm CSDL sử dụng MongoDB

# Một số framework làm back-end: 
* [Font-end](https://fullstack.edu.vn/)
# Chạy project 
    Sử dụng Visual Studio Code và mở folder chứa projcet (có thể sử dụng trực tiếp terminal) --> chạy npm install để cài đặt các dependencies cần thiết. Sau khi cài đặt xong, chạy chương trình bằng lệnh npm start. Cùng lúc đó, mở thêm 1 terminal và chạy server để lấy dữ liệu từ database với lệnh ‘node ./src/Server/Server.js’. Chương trình sẽ tự động chuyển hướng tới trình duyệt mặc định của thiết bị và truy cập vào địa chỉ ‘http://localhost:3000’.
   
