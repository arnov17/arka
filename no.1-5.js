/*
No. 1
Buatlah sebuah method/function yang menerima dua parameter yakni String (untuk nama) dan angka (untuk umur) lalu me-return biodata asli Anda, dengan ketentuan sebagai berikut:
name (String, diambil dari parameter pertama)
age (Number, diambil dari parameter ke dua)
address (String)
hobbies (Array)
is_married (Boolean)
list_school (Array of Object) with key name, year_in, year_out, and major (if any, if no set “null” )
skills (Array of Obj) with key skill_name and level (beginner, advanced, expert)
interest_in_coding (Boolean)
	Return value harus berformat JSON dan sesuai ketentuan di atas.
Pada readme sebutkan kegunaan JSON pada REST API.
Berikut adalah contoh dari JSON format: https://api.bukalapak.com/v2/products/f3vi.json
*/
function biodata (nama, umur) {
let biodata = {
    "name" : nama,
    "age" : umur,
    "addres" : "Jl. H.M Tohir Rt 04/01, Pondok cina, Depok",
    "hobbies" : ["Reading", "Coding", "Watching Film"],
    "is_married" : false,
    "list_school" : 
        {
            "SMA" : ["SMAN 109 Jakarta", 2009, 2012, "IPS"],
            "S1" : ["STID Al-Hadid Surabaya", 2012, 2017, "Manajemen"]
        },
    "skills" :
        {
            "javascript" : "Advanced",
            "HTML" : "Advanced",
            "CSS" : "Advanced",
            "Microsoft_excel" : "Expert"
        },
    "interest_in_coding" : true

}
return biodata
}
console.log(biodata('Arnov', 25))

/*
Pada sebuah form, terdapat 2 buah field yaitu: Username dan Password. Buatlah method/function untuk memvalidasi field-field tersebut, dengan requirement sebagai berikut:
●   	Disarankan menggunakan REGEX
Format Username: Username harus diawali huruf kecil, tidak boleh ada huruf besar, tidak boleh menggunakan special character kecuali ‘ . ’ (titik) dan ‘ _ ’ (underscore), minimal 8 karakter dan maksimal 12 karakter
●   	Format Password: merupakan 9 digit karakter dengan kombinasi minimal 1 simbol dan 1 angka.
Clue:
Peserta hanya diminta membuat function validasi, tidak boleh membuat form HTML.
*/
function usernameValidity (string) {
let forbiden = [' ','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let detect = []
for(i = 0; i < string.length; i++) {
    for(j = 0; j < forbiden.length; j++) {
        if(string[i] === forbiden[j]) {
            detect.push(string)
    }
}
if (detect.length > 0 || string.length < 8 || string.length > 12) {
    return false
    } else
    return true
    }
}

function passwordValidity (string) {
let angka = '0123456789'
let symbol = ['!','@','#','%','^','&','*','.','*','+','-','?','^','&','|']
let detect_angka = []
let detect_symbol = []
for (i = 0; i < string.length; i++) {
    for(j = 0; j < angka.length; j++) {
        if(string[i] === angka[j]) {
            detect_angka.push(string)
        }
    }
    for(k = 0; k < symbol.length; k++) {
        if(string[i] === symbol[k]) {
            detect_symbol.push(string)
        }
    }
}
if (detect_angka.length > 0 && detect_symbol.length > 0 && string.length == 9) {
    return true
} else return false
}

console.log(usernameValidity("john.smith"))
console.log(usernameValidity("johnsmith26"))
console.log(usernameValidity("JOHNSmith"))
console.log(passwordValidity("j0hn5m!th"))

/*
Buatlah fungsi yang mempunyai sebuah parameter yang bekerja untuk menghitung jumlah huruf hidup pada sebuah string.
Input 1	: count_vowels(‘programmer’)
Output 1	: 3
Input 2	: count_vowels(‘hmm..’)
Output 2	: 0
*/

function count_vowels(string) {
let vokal = ['a', 'i', 'u', 'e', 'o']
let output = 0
for(i = 0; i < vokal.length; i++) {
    for(j = 0; j < string.length; j++) {
        if (vokal[i] === string[j]) {
            output++
        }
    }
}
return output
}

console.log(count_vowels("programmer"))
console.log(count_vowels('hm..'))

// No. 4
/*
Buatlah program yang dapat menemukan berapa banyak sebuah kata/frasa dari sebuah string baik itu dari kiri atau kanan.
REQUIREMENT:
Input dari user sebanyak 2 parameter berupa string dan kata/frasa yang ingin dicari.
Input kata/frasa pencarian tidak bisa lebih panjang dibandingkan string.
Output berupa banyaknya kata/frasa pencarian yang ditemukan dari string yang telah diberikan.
*/
function hitungfrasa(string, kata) {
let count = 0
for(i = 0 ; i < string.length - 3; i++) {
    if(string[i] + string[i+1] + string[i+2] + string[i+3] === kata) {
        count++
    }
}
for(j = string.length - 1; j >= 3; j--) {
    if(string[j] + string[j - 1] + string[j - 2] + string[j - 3] === kata) {
        count++
    }
}
return 'ditemukan ' + count + ' kali'
}
console.log(hitungfrasa('banananana','nana'));

/*
Buatlah sebuah program/fungsi untuk membentuk sebuah segitiga siku-siku terbalik dengan ketentuan sebagai berikut:
Parameter berupa 2 bilangan bulat positif (A,B) dimana A <= B
Segitiga dibentuk dengan deret bilangan genap yang nilainya berada diantara A dan B (A dan B termasuk)
Output berupa segitiga siku-siku terbalik.
*/

function createTriangle(param1, param2) {
for (var i = param1; i <= param2; i++) {
	var num = '';
	for (var j = i; j <= param2; j++) {
        num += j;
	}
	console.log(num);
 }
}
console.log(createTriangle(2,10))