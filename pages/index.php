<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pu</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">
    <link rel="stylesheet" href="assets/dist/css/main.css">
</head>
<body>
<nav class="navbar">
    <div class="container d-flex justify-content-between align-items-center">
        <div class="navbar-logo">
            <img src="assets/dist/images/logo.png" alt="">
        </div>
        <div class="navbar-menu">
            <ul>
                <li><a href="?page=home">Beranda</a></li>
                <li>
                    <a href="">Profil</a>
                    <div class="dropdown">
                        <ul>
                            <li><a href="">Visi dan Misi</a></li>
                            <li><a href="">Sejarah</a></li>
                            <li><a href="">Tugas dan Fungsi</a></li>
                            <li><a href="">Struktur Organisasi</a></li>
                            <li><a href="">Motto dan Lambang</a></li>
                            <li><a href="">Informasi dan Pejabat</a></li>
                            <li><a href="">Profil Pejabat</a></li>
                            <li><a href="">Lokasi dan Kontak</a></li>
                            <li><a href="">Iprove</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="">Organisasi</a>

                    <div class="dropdown">
                            <ul>
                                <li><a href="">Sekretariat Jendral</a></li>
                                <li><a href="">Inspektorat Jendral</a></li>
                                <li><a href="">Direktorat Jendral Sumber Daya Air</a></li>
                                <li><a href="">Direktorat Jendral Bina Marga</a></li>
                                <li><a href="">Direktorat Jendral Cipta Karya</a></li>
                                <li><a href="">Direktorat Jendral Penyedia Perumahan</a></li>
                                <li><a href="">Direktorat Jendral Bina Kontruksi</a></li>
                                <li><a href="">Direktorat Jenderal Pembiayaan Infrastruktur Pekerjaan Umum dan Perumahan</a></li>
                                <li><a href="">Badan Pengembangan Infrastruktur Wilayah</a></li>
                                <li><a href="">Badan Penelitian dan Pengembangan</a></li>
                                <li><a href="">Badan Pengembangan Sumber Daya Manusia</a></li>
                                <li><a href="">Badan Pengatur Jalan Tol</a></li>
                                <li><a href="">Badan Peningkatan Penyelenggaraan Sistem Penyediaan Air Minum</a></li>
                            </ul>
                        </div>
                </li>
                <li>
                    <a href="">Produk</a>
                    <div class="dropdown">
                        <ul>
                            <li><a href="">Informasi Anggaran Kementerian PUPR</a></li>
                            <li><a href="">RENSTRA 2015-2019</a></li>
                            <li><a href="">Kebijakan/Peraturan</a></li>
                            <li><a href="">Standard Nasional</a></li>
                            <li><a href="">e-Government Kementerian PUPR</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="">Informasi Publik</a>

                    <div class="dropdown">
                        <ul>
                            <li><a href="?page=index-berita">Profil PPID Kementerian PUPR</a></li>
                            <li><a href="">Dasar Hukum</a></li>
                            <li><a href="">Daftar Informasi Publik</a></li>
                            <li><a href="">Rencana Pengadaan</a></li>
                            <li><a href="">e-PPID</a></li>
                            <li><a href="">Permintaan Informasi</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="">Publikasi</a>

                    <div class="dropdown">
                        <ul>
                            <li><a href="">Pengumuman</a></li>
                            <li><a href="">Guntingan Berita</a></li>
                            <li><a href="">Media Cetak PU</a></li>
                            <li><a href="">Glossary</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="">Kontak</a></li>
                <li>
                    <a href="">Galeri</a>

                    <div class="dropdown">
                        <ul>
                            <li><a href="">Foto</a></li>
                            <li><a href="">Video</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="" class="btn pengaduan">Pengaduan</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    <?php if(!isset($_GET['page'])) $_GET['page'] = 0;?>
    <?php
        if ($_GET['page']) {
            require_once 'pages/'.$_GET['page'] . '.php';
        } else {
            require_once 'pages/home.php';
        }
    ?>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
    <script src="assets/dist/js/siema.min.js"></script>
    <script src="assets/dist/js/main.js"></script>
</body>
</html>