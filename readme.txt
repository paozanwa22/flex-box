// Lebih Lengkapnya, silahkan kunjungi file practik yang penjelasan ada di samping tiap tiap baris sorcode nya
// Terimakasih sudah mengunjungi (semoga bermanfaat)

//yang bisa kita berikan pada container
.container {
	display: flex; /* membuat item berjejer ke kanan */
	flex-direction: row(dari kiri ke kanan) | row-reverse(dari kanan ke kiri) | column(turun ke bawah) | column-reverese; //arah jejeran
	flex-wrap: nowrap(default) | wrap(supaya dia turun) | wrap-reverse;	//wrap memungkinkan untuk memindahkan items ke baris di bawahnya
	justify-content:	//mengatur posisi tampilan item yang berada di dalam container  (horizontal)
		flex-start
		flex-end
		center
		space-between
		space-around
		space-evenly
	align-items: 		//mengatur perilaku penjajaran items terhadap cross axis
		flex-start
		flex-end
		center
		stretch	
		baseline
	align-content:		//Mengatur jarak antar items terhadap cross axis(hanya berfungsi ketika items lebih dari 1 baris)
		flex-start
		flex-end
		center
		space-between
		stretch
		space-around
}

/* property pada items */
order //untuk mengatur urutan-urutan pada elemen-elemennya
.satu { order: 2; }
.dua { order: 3; }
.tiga { order: 4; }
.empat { order: 1; }

flex-grow / flex	//Untuk mengatur ukuran dari item
.satu { flex-grow: 1; }
.dua { flex-grow: 3; }
.tiga { flex-grow: 1; }
.empat { flex-grow: 1; }

align-self	//mengatur prilaku penjajaran sebuah item yang spesifik terhadap cross axis
.item {
	align-self: auto | flex-start | flex-end | center | baseline | stretch;
}

//Latihan pertama
flex-grow atau flex //sama
flex: 1; //ukuran pada kolom/item seluas 1
order: //memindahkan posisi antar item/kolom

//Latihan ke-dua
//Latihan ke-tiga


// NGOBAR #23 - Membuat RESPONSIVE NAVBAR menggunakan FLEXBOX (HTML, CSS & Javascript)




//clear float //cara menghapus float
.container::after {
	content: '';
	display: block;
	clear: both;
}

display: flex;  == float: right & clear: both; //dengan menggunakan display: flex, sama dengan menggunakan float dan clear
