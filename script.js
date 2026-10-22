/* Lila Reads — standalone library interactions (plain JavaScript, no framework). */
"use strict";

const books = [
  {
    id: "harry-potter", title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling",
    genre: "Fantasy", category: "Fantasy", cover: "images/HARRY_POTTER_1792598517484.jpeg",
    synopsis: "Isang batang lalaki ang nakatuklas na isa siyang wizard at nagsimulang mag-aral ng mahika sa Hogwarts School of Witchcraft and Wizardry.",
    chapterTitle: "Ang liham na hindi inaasahan",
    chapter: [
      "May mga araw na parang walang kakaiba sa lahat: ang parehong almusal, ang parehong hagdan, at ang parehong sulok ng bahay na tila laging may lihim. Pero minsan, isang maliit na bagay lang ang kailangan para magbago ang buong mundo.",
      "Sa umagang iyon, may dumating na liham na may pangalang hindi dapat alam ng sinuman. Makapal ang papel, kakaiba ang sulat, at tila may dalang paanyaya sa isang buhay na hindi pa naiisip ng batang tatanggap nito.",
      "Hindi pa niya alam kung ano ang nasa kabilang panig ng pintuan. Ang alam lang niya, sa unang pagkakataon, may isang lugar na tila naghihintay para sa kanya."
    ]
  },
  {
    id: "hunger-games", title: "The Hunger Games", author: "Suzanne Collins", genre: "Dystopian / Science Fiction", category: "Sci-Fi",
    cover: "images/HUNGER_GAMES_1792598517483.jpeg",
    synopsis: "Nagboluntaryo si Katniss Everdeen para sumali sa isang mapanganib na paligsahang ipinapalabas sa telebisyon upang iligtas ang kaniyang nakababatang kapatid.",
    chapterTitle: "Isang pangakong kailangang tuparin",
    chapter: [
      "Maaga pa nang magising si Mara sa tunog ng hangin sa bintana. Sa maliit nilang bahay, alam ng lahat na darating ang araw ng pagpili; walang nagtanong kung handa ba sila.",
      "Nang marinig niya ang pangalan ng kapatid, tumigil ang mundo sa isang saglit. Pagkatapos ay umusad ang mga paa niya bago pa makapag-isip ang isip. Isang hakbang pasulong, isang pangakong hindi na mababawi.",
      "Sa malayong entablado, nakatutok na ang mga kamera. Sa loob niya, malinaw lamang ang isang bagay: kailangan niyang umuwi kasama ang kapatid."
    ]
  },
  {
    id: "fault-in-our-stars", title: "The Fault in Our Stars", author: "John Green", genre: "Romance / Young Adult", category: "Romance",
    cover: "images/THE_FAULT_IN_OUR_STARS_1792598517481.jpeg",
    synopsis: "Nagkakilala ang dalawang teenager sa isang support group at bumuo ng makabuluhang ugnayan habang hinaharap ang mahihirap na pangyayari.",
    chapterTitle: "Sa silid na puno ng mga kuwento",
    chapter: [
      "Hindi paborito ni Lia ang mga sirkulong may upuan. Sa bawat linggo, pareho ang ayos ng silid at halos pareho rin ang mga kuwento, pero may bagong mukha sa tabi ng bintana.",
      "Nagpalitan sila ng tingin at ng isang maingat na ngiti. Walang malaking pangako, walang eksenang parang pelikula—isang biro lang tungkol sa malamig na kape at sa librong dala niya.",
      "Pag-uwi ni Lia, naisip niyang may mga taong dumarating hindi para ayusin ang lahat, kundi para samahan kang makita ang mga bagay na maganda pa rin."
    ]
  },
  {
    id: "the-hobbit", title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy / Adventure", category: "Fantasy",
    cover: "images/HOBBIT_1792598517480.jpg",
    synopsis: "Sumama si Bilbo Baggins sa isang pangkat ng mga dwarf sa paglalakbay upang mabawi ang kanilang tahanan at kayamanang inagaw ng dragon.",
    chapterTitle: "Isang paanyaya sa pintuan",
    chapter: [
      "Gusto ni Berto ang mga umagang walang sorpresa: mainit na tsaa, tahimik na hardin, at isang paboritong upuang hindi kailangang ibahagi. Kaya nang may kumatok, sinubukan niyang huwag pansinin.",
      "Muli itong kumatok. Pagbukas niya, may estrangherong may dalang mapa at tanong tungkol sa isang daang matagal nang nalimutan. Sa likod nito, kumislap ang pangako ng isang paglalakbay na hindi kasya sa sala.",
      "Isinara ni Berto ang pinto, tumingin sa maayos niyang tahanan, at napaisip kung gaano katagal niya nang hindi tinatanong ang sarili kung ano ang nasa kabila ng burol."
    ]
  },
  {
    id: "sherlock-holmes", title: "Sherlock Holmes: The Hound of the Baskervilles", author: "Arthur Conan Doyle", genre: "Mystery / Detective", category: "Mystery",
    cover: "images/SHERLOCK_HOLMES_1792598517478.jpeg",
    synopsis: "Iniimbestigahan ni Sherlock Holmes ang isang mahiwagang alamat tungkol sa nakatatakot na asong hound at sa isang mayamang pamilya.",
    chapterTitle: "Mga bakas sa hamog",
    chapter: [
      "Dumating ang bisita sa Baker Street na may dalang lumang baston at mas lumang takot. Sa labas, nakabalot sa hamog ang lungsod; sa loob, tahimik na pinagmasdan ng detektib ang bawat gasgas sa kahoy.",
      "May isang kuwento tungkol sa lupain sa moor, isang pamilya, at isang alulong na hindi maipaliwanag. Ang bisita ay humingi ng tulong, ngunit mas interesado ang detektib sa mga bagay na hindi sinabi.",
      "Nang matapos ang usapan, inilapag niya ang mapa sa mesa. Ang alamat ay maaaring totoo o hindi—pero ang mga bakas, sabi niya, ay laging may pinanggalingan."
    ]
  },
  {
    id: "pride-and-prejudice", title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance / Classic", category: "Romance",
    cover: "images/PRIDE_1792598517476.webp",
    synopsis: "Hinarap ni Elizabeth Bennet ang pag-ibig, inaasahan ng pamilya, at pagkakaiba ng katayuan habang natututo siyang kuwestiyunin ang unang impresyon.",
    chapterTitle: "Mga unang impresyon",
    chapter: [
      "Sa hapag-kainan, mas mabilis pang kumalat ang balita tungkol sa bagong kapitbahay kaysa sa amoy ng bagong lutong tinapay. May nagsabing mayaman siya; may nagsabing suplado; at may nagpasiyang alam na nila ang buong pagkatao niya.",
      "Nakinig si Elise sa lahat, saka nagtanong kung sino sa kanila ang aktuwal na nakausap nito. Walang sumagot agad. Natawa siya, hindi dahil may alam siyang sikreto, kundi dahil napakadaling punan ng palagay ang mga puwang.",
      "Kinabukasan, sa isang pagtitipon, nagtagpo ang kanilang mga mata. Isang sandali lamang iyon—sapat para malaman ni Elise na maaaring hindi laging tama ang unang kuwento."
    ]
  },
  {
    id: "little-prince", title: "The Little Prince", author: "Antoine de Saint-Exupéry", genre: "Fantasy / Philosophical Fiction", category: "Fantasy",
    cover: "images/LITTLE_PRINCE_1792598517474.webp",
    synopsis: "Naglakbay ang isang batang prinsipe sa iba't ibang planeta at natutuhan ang tungkol sa pagkakaibigan, pag-ibig, pananagutan, at buhay.",
    chapterTitle: "Isang bisita sa ilalim ng mga bituin",
    chapter: [
      "Sa maliit na planetang may tatlong bulkan at isang nag-iisang puno, maingat na binilang ng bata ang mga bituin. Hindi dahil mawawala ang mga ito, kundi dahil gusto niyang malaman kung may nakatingin din mula sa malayo.",
      "Isang gabi, may lumitaw na ilaw sa kalangitan na hindi gumagalaw gaya ng iba. Sa halip na matakot, nagtanong siya kung sino ang naroon at kung may dala itong kuwento.",
      "Mula sa malayong mundo ay dumating ang sagot: may mga bagay na hindi nakikita sa unang tingin, pero nagiging mahalaga kapag inalagaan."
    ]
  },
  {
    id: "the-alchemist", title: "The Alchemist", author: "Paulo Coelho", genre: "Adventure / Philosophical Fiction", category: "Fantasy",
    cover: "images/ALCHEMIST_1792598517452.jpg",
    synopsis: "Naglakbay ang isang pastol upang hanapin ang kayamanan at natutuhan ang tungkol sa pagsunod sa pangarap at pagtuklas ng sariling layunin.",
    chapterTitle: "Ang pangarap sa ilalim ng puno",
    chapter: [
      "Tuwing gabi, bumabalik sa isip ni Tomas ang parehong panaginip: isang punong hindi niya kilala at isang liwanag sa dulo ng malawak na lupain. Sa umaga, ikinukuwento niya ito sa isang matandang tagapag-alaga ng mga tupa.",
      "Hindi sinabi ng matanda kung ano ang ibig sabihin ng panaginip. Sa halip, tinanong niya kung ano ang unang hakbang na kayang gawin ni Tomas ngayon. Minsan, mas mahirap ang tanong kaysa sa sagot.",
      "Kaya nag-impake si Tomas ng tinapay, tubig, at lakas ng loob. Hindi niya alam kung saan hahantong ang daan, pero alam niyang nagsisimula ito sa pag-alis."
    ]
  },
  {
    id: "1984", title: "1984", author: "George Orwell", genre: "Dystopian / Political Fiction", category: "Sci-Fi",
    cover: "images/1984_1792598517448.jpeg",
    synopsis: "Sinisikap ng isang lalaki na panatilihin ang kaniyang pagkatao sa lipunang kontrolado ng mapaniil na pamahalaang nagmamatyag sa mga mamamayan.",
    chapterTitle: "Ang tala sa gilid ng pahina",
    chapter: [
      "Sa lungsod na walang tahimik na sulok, natutong magsalita si Nilo sa mga pangungusap na ligtas pakinggan. Sa mga pampublikong pader, paulit-ulit ang mga mensaheng nagsasabing walang nakakalimutan ang pamahalaan.",
      "May maliit siyang kuwaderno na halos hindi makita sa ilalim ng sahig. Doon niya isinulat ang petsa, ang tunog ng ulan, at ang pangalan ng isang kaibigang matagal nang hindi nakikita.",
      "Hindi niya alam kung may makakabasa nito. Pero sa bawat salitang isinulat niya, naaalala niyang may sariling isip pa rin siya."
    ]
  },
  {
    id: "to-kill-a-mockingbird", title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic / Social Fiction", category: "Classic",
    cover: "images/MOCKINGBIRD_1792598517446.jpeg",
    synopsis: "Nasasaksihan ng isang batang babae ang kawalang-katarungang panlahi at tapang na moral sa kaniyang komunidad sa Timog Amerika.",
    chapterTitle: "Ang tanong sa lilim ng puno",
    chapter: [
      "Sa maalikabok na kalsada, maraming kuwentong alam ng mga bata kahit hindi nila lubos na nauunawaan. Pinagmamasdan ni Mina ang mga matatandang nag-uusap sa tindahan at napansing may mga taong hindi pinakikinggan kahit malinaw ang sinasabi.",
      "Nang tanungin niya ang kaniyang ama kung bakit, hindi ito nagbigay ng madaling sagot. Sa halip, hiniling nitong isipin niya kung ano ang makatarungan kapag walang nakatingin.",
      "Kinagabihan, isinulat ni Mina ang tanong sa isang papel. Hindi pa niya alam ang lahat ng sagot, pero alam niyang mahalagang magpatuloy sa pagtatanong."
    ]
  },
  {
    id: "great-gatsby", title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic / Tragedy", category: "Classic",
    cover: "images/GATSBY_1792598475234.webp",
    synopsis: "Hinahabol ng isang misteryosong milyonaryo ang nawalang pag-ibig habang sinusuri ng kuwento ang yaman, ambisyon, at American Dream.",
    chapterTitle: "Mga ilaw sa kabilang pampang",
    chapter: [
      "Tuwing gabi, nagliliwanag ang mansiyon sa tapat ng look. Dumadating ang mga sasakyan, tumutugtog ang musika, at umaabot sa tubig ang mga tinig ng mga taong hindi kailanman nagpakilala.",
      "Sa kabilang pampang, may isang lalaking laging nakatayo sa ilalim ng puno. Hindi siya sumasali sa kasiyahan. Tinitingnan lamang niya ang isang maliit na ilaw sa malayo na para bang iyon ang tanging bagay na mahalaga.",
      "May mga pangarap na napakaliwanag mula sa malayo. Kapag nilapitan, saka lamang makikita kung ano ang tunay na laman ng mga ito."
    ]
  },
  {
    id: "narnia", title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", genre: "Fantasy / Adventure", category: "Fantasy",
    cover: "images/NARNIA_1792598475235.jpg",
    synopsis: "Pumasok ang apat na magkakapatid sa mahiwagang mundo at tumulong lumaban sa makapangyarihang mangkukulam na nagkulong sa lupain sa walang katapusang taglamig.",
    chapterTitle: "Ang pintuang nasa likod ng mga amerikana",
    chapter: [
      "Habang nagtatago sa maingay na laro, binuksan ni Lina ang pinto ng lumang aparador. Inasahan niya ang mga amerikana at alikabok, ngunit may malamig na hangin na dumampi sa kaniyang mukha.",
      "Humakbang siya sa pagitan ng mga damit at naramdaman ang niyebe sa ilalim ng sapatos. Sa unahan, may mga punong nababalutan ng yelo at isang poste ng ilaw na tila nag-iisang bantay sa kagubatan.",
      "Sa likod niya ay ang pamilyar na silid; sa harap niya ay isang mundong hindi pa niya nakikita. Sandali siyang nag-atubili, saka nagpatuloy."
    ]
  },
  {
    id: "percy-jackson", title: "Percy Jackson and the Lightning Thief", author: "Rick Riordan", genre: "Fantasy / Mythology", category: "Fantasy",
    cover: "images/PERCY_1792598475230.jpeg",
    synopsis: "Nadiskubre ni Percy Jackson na isa siyang demigod at nagsimula sa isang misyon tungkol sa mga diyos ng Gresya at nawawalang kidlat.",
    chapterTitle: "Isang field trip na hindi pangkaraniwan",
    chapter: [
      "Nagsimula ang araw ni Pio sa karaniwang paalala: huwag ma-late, huwag makipagtalo, at huwag hawakan ang mga exhibit. Pagsapit ng tanghali, tila sabay-sabay namang nasira ang lahat ng patakarang iyon.",
      "May narinig siyang kakaibang kulog sa loob ng museo kahit maaraw sa labas. Isang guro ang nagtanong kung may nakita siya, ngunit bago pa siya makasagot, nagbago ang liwanag sa bulwagan.",
      "Sa gabing iyon, sinabi ng isang kaibigan na may mga alamat na hindi lang kuwento. At kung totoo iyon, matagal nang may mga mata sa kanya ang mga diyos."
    ]
  },
  {
    id: "maze-runner", title: "The Maze Runner", author: "James Dashner", genre: "Science Fiction / Thriller", category: "Sci-Fi",
    cover: "images/MAZE_RUNNER_1792598475232.webp",
    synopsis: "Nagising ang isang teenager sa isang mahiwagang lugar na napapalibutan ng pader at nakipagtulungan sa iba upang lutasin ang lihim ng mapanganib na maze.",
    chapterTitle: "Pagmulat sa gitna ng mga pader",
    chapter: [
      "Nagising si Ren sa tunog ng bakal na gumagalaw. Hindi niya maalala ang pangalan niya, ang tahanan niya, o kung paano siya nakarating sa madilim na elevator.",
      "Nang bumukas ang pinto, sinalubong siya ng mga mukha ng mga kabataang tila matagal nang naghihintay. Sa paligid nila ay may malalaking pader, at sa likod ng mga iyon ay isang pasilyong nagbabago sa bawat gabi.",
      "Walang makapagbigay ng kumpletong sagot. Pero may mga palatandaan sa bato, at may mga taong handang tumulong. Kailangan lamang niyang alamin kung ano ang dapat itanong muna."
    ]
  },
  {
    id: "divergent", title: "Divergent", author: "Veronica Roth", genre: "Dystopian / Science Fiction", category: "Sci-Fi",
    cover: "images/DIVERGENT_1792598475229.jpeg",
    synopsis: "Sa lipunang hinahati ang mga tao ayon sa personalidad, natuklasan ng isang dalaga na hindi siya nababagay sa iisang pangkat lamang.",
    chapterTitle: "Ang araw ng pagpili",
    chapter: [
      "Sa lungsod ni Talia, maagang pinipili ng lahat kung anong uri ng tao sila dapat maging. May mga pagsusulit, seremonya, at payo mula sa pamilyang umaasang mananatili siya sa nakasanayang landas.",
      "Sa silid ng pagsusulit, may mga sagot siyang hindi nagtugma sa mga kahon. Tumingin sa kanya ang tagasuri at sinabing huwag itong ikuwento kaninuman.",
      "Pag-uwi niya, mas mabigat ang sikreto kaysa sa takot. Kung hindi siya kasya sa iisang pangkat, baka may dahilan kung bakit kailangang pumili siya ng sarili niyang direksiyon."
    ]
  },
  {
    id: "book-thief", title: "The Book Thief", author: "Markus Zusak", genre: "Historical Fiction / Drama", category: "History",
    cover: "images/BOOK_THIEF_1792598475228.jpeg",
    synopsis: "Nakahanap ng ginhawa ang isang batang babae sa pagnanakaw at pagbabahagi ng mga libro sa gitna ng digmaan at pag-uusig sa Nazi Germany.",
    chapterTitle: "Mga salitang napulot sa daan",
    chapter: [
      "Sa bayang laging may matang nakatingin, natutong magtago si Leni ng mga bagay na hindi naman dapat nakawin: isang pahina, isang pangungusap, isang pangalan na ayaw niyang makalimutan.",
      "Isang araw, may librong naiwan sa tabi ng daan. Maingat niya itong pinulot, hindi para yumaman kundi dahil gusto niyang malaman kung anong uri ng mundo ang nasa loob nito.",
      "Sa gabing iyon, binasa niya ang ilang linya sa isang silid na madilim. Sa labas, patuloy ang takot; sa loob, may mga salitang nagbibigay sa kaniya ng lakas para magpatuloy."
    ]
  },
  {
    id: "frankenstein", title: "Frankenstein", author: "Mary Shelley", genre: "Gothic Horror / Science Fiction", category: "Horror",
    cover: "images/FRANKENSTEIN_1792598475226.jpeg",
    synopsis: "Lumikha ang isang siyentista ng buhay na nilalang, na humantong sa trahedya at mga tanong tungkol sa pananagutan at pagkatao.",
    chapterTitle: "Ang makinang hindi dapat gumana",
    chapter: [
      "Sa itaas ng bayan, may pagawaan na hindi natutulog. Sa loob nito, nag-iipon si Elias ng mga tala, kagamitan, at tanong na hindi kayang sagutin ng kaniyang mga kasamahan.",
      "Nang gabing iyon, gumalaw ang karayom sa metro. Kumislap ang ilaw, umalingawngaw ang tunog ng bagyo, at may mahinang paghinga sa kabilang dulo ng silid.",
      "Napatigil si Elias. Ang una niyang naramdaman ay tagumpay; ang sumunod ay takot. Sa pagitan ng dalawa, naunawaan niyang may mga bagay na hindi natatapos sa sandaling magawa mo ang mga ito."
    ]
  },
  {
    id: "dracula", title: "Dracula", author: "Bram Stoker", genre: "Gothic Horror", category: "Horror",
    cover: "images/DRACULA_1792598475225.jpeg",
    synopsis: "Hinarap ng isang pangkat ang Count Dracula, isang misteryosong maharlikang may nakatatakot na lihim na supernatural.",
    chapterTitle: "Ang panauhin sa lumang tahanan",
    chapter: [
      "Dumating si Adrian sa bundok bago lumubog ang araw. Sa bawat milya, kumakaunti ang mga bahay at dumarami ang mga babalang hindi dapat maglakbay nang mag-isa.",
      "Sa tuktok ay naghihintay ang isang matandang tahanang may nakabukas na tarangkahan. Tinanggap siya ng may-ari nito nang magalang, ngunit walang nakikitang salamin sa malawak na bulwagan.",
      "Nang sumapit ang hatinggabi, nagising si Adrian sa tunog ng mabagal na mga hakbang. Sa labas, walang hangin. Sa loob, may pinto na bahagyang nakabukas."
    ]
  },
  {
    id: "the-shining", title: "The Shining", author: "Stephen King", genre: "Horror / Psychological Thriller", category: "Horror",
    cover: "images/SHINING_1792598475224.jpeg",
    synopsis: "Nakaranas ang isang pamilyang nananatili sa liblib na hotel ng unti-unting lumalalang mga pangyayaring tila sobrenatural.",
    chapterTitle: "Tahimik ang pasilyo",
    chapter: [
      "Sa taglamig, ang hotel ay naging isla sa gitna ng niyebe. Dinala ni Mara ang kaniyang pamilya roon para sa bagong trabaho at bagong simula, kahit halos walang dumaraang sasakyan.",
      "Sa unang gabi, tahimik ang mga silid. Sa ikalawa, may narinig siyang tunog ng elevator kahit patay ang kuryente sa pakpak na iyon ng gusali.",
      "Sinabi niyang hangin lamang iyon. Pero nang bumukas ang pinto ng pasilyo, may sariwang niyebe sa sahig at mga bakas ng paa na nagtatapos sa harap ng kanilang silid."
    ]
  },
  {
    id: "murder-orient-express", title: "Murder on the Orient Express", author: "Agatha Christie", genre: "Mystery / Crime", category: "Mystery",
    cover: "images/MURDER_1792598475222.avif",
    synopsis: "Iniimbestigahan ng detektib na si Hercule Poirot ang isang pagpatay sa marangyang tren na naipit sa niyebe.",
    chapterTitle: "Isang gabi sa tren",
    chapter: [
      "Puno ang tren ng mga pasaherong may dalang sariling dahilan sa paglalakbay. Sa dining car, tahimik na kumain ang isang detektib habang pinagmamasdan ang mga kamay, boses, at katahimikan ng bawat isa.",
      "Pagsapit ng hatinggabi, huminto ang tren sa gitna ng niyebe. Walang istasyon sa malapit at walang bakas ng ibang sasakyan sa labas.",
      "Nang dumating ang balita tungkol sa isang pasaherong hindi na nagising, nagbago ang lahat ng usapan. Nasa iisang karwahe ang lahat ng posibleng sagot—at lahat ng posibleng tanong."
    ]
  },
  {
    id: "da-vinci-code", title: "The Da Vinci Code", author: "Dan Brown", genre: "Mystery / Thriller", category: "Mystery",
    cover: "images/DAVINCI_1792598475221.webp",
    synopsis: "Iniimbestigahan ng isang symbologist ang isang pagpatay at sinusundan ang mga palatandaang pangkasaysayan, lihim na samahan, at nakatagong mensahe.",
    chapterTitle: "Ang simbolong naiwan",
    chapter: [
      "Nakatanggap si Mira ng tawag mula sa isang museo matapos magsara ang mga pinto. May guhit sa sahig na hindi kasama sa anumang tala, at may mensaheng nakasulat sa wikang hindi niya agad makilala.",
      "Sa ilalim ng ilaw, napansin niyang hindi basta marka ang mga hugis. Magkakaugnay ang mga ito, parang mga piraso ng mapa na nakakalat sa iba't ibang panahon.",
      "Kinuha niya ang kuwaderno at isinulat ang unang tanong: sino ang gustong may makakita nito? Ang sagot, alam niyang, ay magdadala sa kanya sa mas malalim na palaisipan."
    ]
  },
  {
    id: "the-martian", title: "The Martian", author: "Andy Weir", genre: "Science Fiction / Survival", category: "Sci-Fi",
    cover: "images/MARTIAN_1792598475220.jpg",
    synopsis: "Na-stranded sa Mars ang isang astronaut at ginamit ang kaalamang siyentipiko at talino upang mabuhay habang naghihintay ng saklolo.",
    chapterTitle: "Mga tala para sa susunod na araw",
    chapter: [
      "Nagising si Alex sa pulang alikabok at katahimikang walang katulad. Hindi gumagana ang komunikasyon at hindi makita ang kaniyang mga kasama. Ang tanging malinaw ay kailangan niyang alamin kung ano pa ang gumagana.",
      "Sinuri niya ang hangin, tubig, at natitirang pagkain. Isinulat niya ang bawat sukat sa isang talaan, dahil mas madaling harapin ang problema kapag nahahati ito sa maliliit na hakbang.",
      "Sa labas ng dome, ang planeta ay malawak at walang pakialam. Sa loob, may isang taong nagpasiyang subukan muli bukas."
    ]
  },
  {
    id: "dune", title: "Dune", author: "Frank Herbert", genre: "Science Fiction / Political Adventure", category: "Sci-Fi",
    cover: "images/DUNE_1792598475219.webp",
    synopsis: "Nasangkot ang isang batang maharlika sa tunggalian para sa isang disyertong planeta na may mahalagang yamang kailangan ng buong sansinukob.",
    chapterTitle: "Sa ilalim ng malawak na disyerto",
    chapter: [
      "Bago pa makita ni Arin ang disyerto, naramdaman niya ang bigat nito sa mga usapan. Bawat kasunduan, bawat paglalakbay, at bawat lihim ng palasyo ay may kaugnayan sa buhangin at sa yamang nakatago rito.",
      "Sa unang gabi sa bagong tahanan, tumayo siya sa balkonaheng nakaharap sa malawak na kapatagan. Walang ilaw sa abot-tanaw, ngunit may malalim na katahimikang tila may binabantayang lihim.",
      "Sinabi ng kaniyang guro na ang kapangyarihan ay hindi lamang pag-aari; ito rin ay pananagutang may epekto sa lahat ng umaasa sa lupain."
    ]
  },
  {
    id: "the-giver", title: "The Giver", author: "Lois Lowry", genre: "Dystopian / Young Adult", category: "Sci-Fi",
    cover: "images/GIVER_1792598475202.jpeg",
    synopsis: "Pinili ang isang batang lalaki upang magmana ng mga alaala ng komunidad at natuklasan niya ang kapalit ng pamumuhay sa tila perpektong lipunan.",
    chapterTitle: "Ang araw bago ang tungkulin",
    chapter: [
      "Sa komunidad ni Niko, may nakatakdang oras para sa lahat: pagkain, trabaho, pahinga, at maging ang mga salitang ginagamit sa paghingi ng tawad. Bihira ang sorpresa at iyon ang itinuturing nilang kaligtasan.",
      "Kinabukasan, iaanunsiyo ang tungkulin ng mga kabataan. Sinubukan ni Niko na hulaan kung saan siya ilalagay, pero may kung anong pakiramdam na hindi niya maipaliwanag.",
      "Nang tawagin ang pangalan niya, tumahimik ang bulwagan. Sa unang pagkakataon, naramdaman niyang hindi pa niya alam ang lahat tungkol sa lugar na tinatawag niyang tahanan."
    ]
  },
  {
    id: "atomic-habits", title: "Atomic Habits", author: "James Clear", genre: "Self-Help / Personal Development", category: "Self-Help",
    cover: "images/ATOMIC_HABITS_1792598475217.webp",
    synopsis: "Ipinapaliwanag ng aklat kung paano nakatutulong ang maliliit at tuloy-tuloy na pagbabago sa pagbuo ng mas mabubuting gawi at unti-unting pag-unlad.",
    chapterTitle: "Ang unang maliit na hakbang",
    chapter: [
      "Nagpasya si Lira na magbago ng nakagawian. Sa unang araw, naglista siya ng sampung layunin at sinubukang simulan ang lahat. Sa ikatlong araw, pagod na siya at halos wala nang natapos.",
      "Kinabukasan, pumili siya ng isang bagay na kayang gawin sa loob ng dalawang minuto: ilagay ang sapatos sa tabi ng pinto. Maliit iyon, pero naging malinaw ang susunod na hakbang.",
      "Makalipas ang ilang linggo, hindi pa perpekto ang kaniyang iskedyul. Pero mas madali na siyang magsimula, at iyon ang maliit na pagbabagong gusto niyang panatilihin."
    ]
  },
  {
    id: "seven-habits", title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", genre: "Self-Help / Leadership", category: "Self-Help",
    cover: "images/7_habits_1792598475201.jpeg",
    synopsis: "Gabay ito sa personal na pagiging epektibo sa pamamagitan ng mga prinsipyong tulad ng pananagutan, pag-uuna sa mahalaga, at pakikipagtulungan.",
    chapterTitle: "Mula sa intensiyon tungo sa kilos",
    chapter: [
      "Sa simula ng linggo, sinubukan ni Ben na sagutin ang lahat ng mensahe at tapusin ang bawat gawaing dumating. Pagsapit ng Biyernes, abala siya buong panahon ngunit hindi niya nagawa ang pinakamahalagang proyekto.",
      "Gumawa siya ng bagong listahan: hindi lamang kung ano ang kailangang gawin, kundi kung bakit mahalaga ang bawat gawain. Pinili niya ang dalawa at inilaan ang oras bago pa mapuno ang araw.",
      "Hindi biglang nawala ang mga abala. Pero natutuhan niyang may pagkakaiba ang pagiging abala at ang pag-usad sa mga bagay na tunay niyang pinahahalagahan."
    ]
  },
  {
    id: "win-friends", title: "How to Win Friends and Influence People", author: "Dale Carnegie", genre: "Self-Help / Communication", category: "Self-Help",
    cover: "images/WIN_FRIENDS_1792598475199.webp",
    synopsis: "Nagbibigay ito ng praktikal na mga prinsipyo para mapabuti ang pakikipag-usap, pagbuo ng ugnayan, at epektibong pakikipagtulungan.",
    chapterTitle: "Ang pakikinig na may layunin",
    chapter: [
      "Sa pulong ng pangkat, naghanda si Ana ng maraming sagot bago pa magsalita ang iba. Napansin niyang nauubos ang oras sa pagtatalo, at walang nakaaalala sa unang tanong.",
      "Sa susunod na pulong, nagpasya siyang makinig muna. Nagtanong siya kung ano ang pinakamahalaga sa bawat kasamahan at inulit ang narinig niya upang tiyaking tama ang pagkaunawa.",
      "Nagbago ang tono ng usapan. Hindi dahil sumang-ayon ang lahat, kundi dahil naramdaman nilang may puwang ang kanilang mga ideya."
    ]
  },
  {
    id: "rich-dad-poor-dad", title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", genre: "Personal Finance / Education", category: "Finance",
    cover: "images/RICH_DAD_1792598475197.jpg",
    synopsis: "Ibinabahagi ng may-akda ang mga aral tungkol sa financial literacy, assets, liabilities, at iba't ibang paraan ng pamamahala ng pera.",
    chapterTitle: "Mga tanong tungkol sa pera",
    chapter: [
      "Nang unang makatanggap si Noel ng sweldo, agad niyang inisip kung ano ang bibilhin. Pagkatapos, tinanong siya ng kaniyang tiyahin kung paano niya gustong magamit ang pera sa susunod na taon.",
      "Hindi niya alam ang sagot. Magkasama nilang isinulat ang mga gastusin, ipon, at mga bagay na maaaring makatulong sa kaniyang mga layunin. Mas malinaw ang larawan nang mailagay ito sa papel.",
      "Hindi naging madali ang bawat desisyon, pero natutuhan ni Noel na mas mabuting magtanong tungkol sa pera bago ito gastusin kaysa magsisi pagkatapos."
    ]
  },
  {
    id: "diary-young-girl", title: "The Diary of a Young Girl", author: "Anne Frank", genre: "Biography / Historical Nonfiction", category: "History",
    cover: "images/YOUNG_GIRL_1792598475195.jpg",
    synopsis: "Itinatala sa talaarawan ni Anne Frank ang kaniyang mga saloobin, karanasan, at pag-asa habang nagtatago kasama ang pamilya noong Ikalawang Digmaang Pandaigdig.",
    chapterTitle: "Mga alaala at pag-asa",
    chapter: [
      "May mga panahong ang isang kuwaderno ang nagiging tahimik na kausap. Sa gitna ng digmaan at panganib, isinulat ng isang kabataang babae ang mga bagay na hindi niya masabi nang malakas: ang lungkot, pagkainip, pagtatalo, at pag-asa.",
      "Ang mga pahina niya ay hindi lamang tala ng mga pangyayari. Ipinakikita rin ng mga ito ang pagnanais na maunawaan ang sarili at ang mundong biglang naging makitid at mapanganib.",
      "Ang kabanatang ito ay maikling gabay sa konteksto ng talaarawan, hindi sipi o bagong pahina na isinulat sa pangalan ni Anne Frank."
    ]
  },
  {
    id: "brief-history-time", title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science / Nonfiction", category: "Science",
    cover: "images/TIME_1792598475193.jpeg",
    synopsis: "Ipinapakilala ni Stephen Hawking ang mahahalagang ideya tungkol sa sansinukob, kabilang ang black holes, espasyo, panahon, at pinagmulan ng lahat.",
    chapterTitle: "Mga tanong sa kalangitan",
    chapter: [
      "Kapag tumingala tayo sa gabi, nakikita natin ang mga liwanag na naglakbay nang napakalayo bago makarating sa ating mga mata. Dahil dito, ang pagtingin sa kalangitan ay maaari ring maging pagtingin sa nakaraan.",
      "Sinisikap ng agham na ilarawan kung paano gumagalaw ang espasyo at panahon, at kung paano umusbong ang mga bagay na nakikita natin. Hindi lahat ng sagot ay simple, pero nagsisimula ang pag-unawa sa malinaw na tanong.",
      "Sa unang kabanatang ito, ang paanyaya ay maging mausisa: ano ang nasa kabila ng nakikita natin, at anong ebidensiya ang makatutulong upang malaman iyon?"
    ]
  }
];

const categories = ["Lahat", "Fantasy", "Sci-Fi", "Romance", "Mystery", "Classic", "Horror", "Self-Help", "History", "Finance", "Science"];
const featuredIds = ["harry-potter", "1984", "great-gatsby", "murder-orient-express", "atomic-habits"];
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const storage = {
  get(key, fallback) {
    try { const value = localStorage.getItem(key); return value === null ? fallback : JSON.parse(value); }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Private browsing can disable storage. */ }
  }
};

const state = {
  category: "Lahat",
  query: "",
  sort: "featured",
  view: "library",
  favorites: new Set(storage.get("lila-favorites", [])),
  progress: storage.get("lila-progress", {}),
  featureIndex: 0,
  selectedBook: null,
  synopsisOpen: true,
  readerFont: 17,
  theme: storage.get("lila-theme", "light")
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function normalize(value) {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function getBook(id) {
  return books.find(book => book.id === id);
}

function renderFilters() {
  $("#filterList").innerHTML = categories.map(category => `
    <button class="filter-chip" type="button" data-category="${escapeHtml(category)}" aria-pressed="${category === state.category}">
      ${escapeHtml(category)}
    </button>`).join("");
}

function matchesBook(book) {
  const queryMatch = !state.query || normalize(`${book.title} ${book.author} ${book.genre} ${book.synopsis}`).includes(normalize(state.query));
  const categoryMatch = state.category === "Lahat" || book.category === state.category;
  const shelfMatch = state.view !== "shelf" || state.favorites.has(book.id);
  return queryMatch && categoryMatch && shelfMatch;
}

function renderBooks() {
  let visible = books.filter(matchesBook);
  if (state.sort === "az") visible.sort((a, b) => a.title.localeCompare(b.title));
  if (state.sort === "za") visible.sort((a, b) => b.title.localeCompare(a.title));
  if (state.sort === "genre") visible.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));

  $("#resultSummary").textContent = state.view === "shelf"
    ? `${visible.length} ${visible.length === 1 ? "libro" : "na libro"} sa iyong shelf.`
    : `${visible.length} ${visible.length === 1 ? "libro" : "na libro"} ang ipinapakita sa ${books.length} kabuuang libro.`;
  $("#shelfNotice").hidden = state.view !== "shelf";
  $("#bookGrid").hidden = visible.length === 0;
  $("#emptyState").hidden = visible.length !== 0;

  $("#bookGrid").innerHTML = visible.map(book => {
    const progress = Math.max(0, Math.min(100, Number(state.progress[book.id]) || 0));
    const favorite = state.favorites.has(book.id);
    return `
      <article class="book-card">
        <button class="book-cover-button" type="button" data-action="details" data-id="${book.id}" aria-label="Tingnan ang detalye ng ${escapeHtml(book.title)}">
          <img class="book-cover" src="${book.cover}" alt="Pabalat ng ${escapeHtml(book.title)}" loading="lazy">
          <span class="cover-overlay"><span>Tingnan ang detalye →</span></span>
        </button>
        <button class="favorite-button" type="button" data-action="favorite" data-id="${book.id}" aria-label="${favorite ? "Alisin sa" : "Idagdag sa"} My Shelf: ${escapeHtml(book.title)}" aria-pressed="${favorite}">${favorite ? "♥" : "♡"}</button>
        <div class="book-card-meta">
          <p class="book-genre">${escapeHtml(book.category)}</p>
          <h3>${escapeHtml(book.title)}</h3>
          <p class="book-author">${escapeHtml(book.author)}</p>
          ${progress > 0 ? `<div class="card-progress" title="Reading progress: ${progress}%"><span style="width:${progress}%"></span></div>` : ""}
          <div class="card-actions">
            <button class="card-action read-action" type="button" data-action="read" data-id="${book.id}">${progress > 0 && progress < 100 ? "Magpatuloy" : "Basahin"}</button>
            <button class="card-action" type="button" data-action="details" data-id="${book.id}">Detalye</button>
          </div>
        </div>
      </article>`;
  }).join("");
  $("#shelfCount").textContent = state.favorites.size;
  $$(".main-nav [data-view]").forEach(link => link.classList.toggle("is-current", link.dataset.view === state.view));
}

function updateFeature() {
  const id = featuredIds[state.featureIndex];
  const book = getBook(id);
  if (!book) return;
  $("#featureCover").src = book.cover;
  $("#featureCover").alt = `Pabalat ng ${book.title}`;
  $("#featureTitle").textContent = book.title;
  $("#featureAuthor").textContent = book.author;
  $("#featureGenre").textContent = book.genre;
  $("#featureSynopsis").textContent = book.synopsis;
  $("#featureLike").setAttribute("aria-pressed", state.favorites.has(book.id));
  $("#featureLike").textContent = state.favorites.has(book.id) ? "♥" : "♡";
  $("#featureLike").setAttribute("aria-label", state.favorites.has(book.id) ? "Alisin sa My Shelf" : "Idagdag sa My Shelf");
  $("#featureRead").dataset.id = book.id;
  $("#featureLike").dataset.id = book.id;
  $("#sliderDots").innerHTML = featuredIds.map((_, index) =>
    `<button class="slider-dot" type="button" data-slide="${index}" aria-label="Tampok na libro ${index + 1}" aria-current="${index === state.featureIndex}"></button>`
  ).join("");
}

function setFeature(index) {
  state.featureIndex = (index + featuredIds.length) % featuredIds.length;
  updateFeature();
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  storage.set("lila-favorites", [...state.favorites]);
  renderBooks();
  updateFeature();
  if ($("#bookDialog").open && state.selectedBook) updateDialogFavorite();
}

function updateDialogFavorite() {
  const active = state.favorites.has(state.selectedBook.id);
  $("#dialogLike").setAttribute("aria-pressed", active);
  $("#dialogLike").innerHTML = `${active ? "♥" : "♡"} <span id="dialogLikeText">${active ? "Nasa My Shelf na" : "Idagdag sa My Shelf"}</span>`;
}

function updateDialogProgress(book) {
  const value = Math.max(0, Math.min(100, Number(state.progress[book.id]) || 0));
  $("#dialogProgressWrap").hidden = value === 0;
  $("#dialogProgress").value = value;
  $("#dialogProgressText").textContent = `${value}%`;
}

function openDetails(book) {
  state.selectedBook = book;
  state.synopsisOpen = true;
  $("#dialogCover").src = book.cover;
  $("#dialogCover").alt = `Pabalat ng ${book.title}`;
  $("#dialogGenre").textContent = book.genre;
  $("#dialogTitle").textContent = book.title;
  $("#dialogAuthor").textContent = `ni ${book.author}`;
  $("#dialogSynopsis").textContent = book.synopsis;
  $("#dialogSynopsis").hidden = false;
  $("#synopsisToggle").textContent = "Itago";
  $("#synopsisToggle").setAttribute("aria-expanded", "true");
  $("#dialogRead").dataset.id = book.id;
  $("#dialogLike").dataset.id = book.id;
  updateDialogProgress(book);
  updateDialogFavorite();
  $("#bookDialog").showModal();
}

function openReader(book) {
  state.selectedBook = book;
  $("#readerBookTitle").textContent = book.title;
  $("#readerGenre").textContent = book.genre;
  $("#readerTitle").textContent = book.title;
  $("#readerAuthor").textContent = `ni ${book.author}`;
  $("#chapterHeading").textContent = `Kabanata 1: ${book.chapterTitle}`;
  $("#readerCopy").innerHTML = book.chapter.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join("");
  $("#finishReading").innerHTML = 'Tapos na akong magbasa <span aria-hidden="true">✓</span>';
  $("#readerProgress").value = Math.max(0, Math.min(100, Number(state.progress[book.id]) || 0));
  $("#readerDialog").showModal();
  const initialProgress = Math.max(0, Math.min(100, Number(state.progress[book.id]) || 0));
  requestAnimationFrame(() => {
    const scroller = $("#readerScroll");
    const max = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
    scroller.scrollTop = max * (initialProgress / 100);
    $("#readerProgress").value = initialProgress;
  });
}

function saveReaderProgress(forceComplete = false, refreshUI = true) {
  if (!state.selectedBook) return;
  const scroller = $("#readerScroll");
  const max = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
  let value = max === 0 ? 0 : Math.round((scroller.scrollTop / max) * 100);
  if (forceComplete) value = 100;
  value = Math.max(0, Math.min(100, value));
  state.progress[state.selectedBook.id] = value;
  storage.set("lila-progress", state.progress);
  $("#readerProgress").value = value;
  updateDialogProgress(state.selectedBook);
  if (refreshUI) renderBooks();
}

function setView(view) {
  state.view = view;
  state.category = "Lahat";
  renderFilters();
  renderBooks();
  if (view === "shelf") $("#libraryTitle").textContent = "My Shelf";
  else $("#libraryTitle").innerHTML = 'Ang library <span class="heading-sparkle" aria-hidden="true">✦</span>';
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;
  $("#themeIcon").textContent = theme === "dark" ? "☀" : "☾";
  $("#themeToggle").setAttribute("aria-label", theme === "dark" ? "Lumipat sa light mode" : "Lumipat sa dark mode");
  storage.set("lila-theme", theme);
}

function initialize() {
  setTheme(state.theme === "dark" ? "dark" : "light");
  renderFilters();
  renderBooks();
  updateFeature();

  $("#filterList").addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    const selectedCategory = button.dataset.category;
    if (state.view === "shelf") setView("library");
    state.category = selectedCategory;
    renderFilters();
    renderBooks();
  });

  $("#bookGrid").addEventListener("click", event => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const book = getBook(button.dataset.id);
    if (!book) return;
    if (button.dataset.action === "favorite") toggleFavorite(book.id);
    if (button.dataset.action === "details") openDetails(book);
    if (button.dataset.action === "read") openReader(book);
  });

  $("#searchInput").addEventListener("input", event => {
    state.query = event.target.value.trim();
    if (state.view === "shelf" && !state.favorites.size) setView("library");
    renderBooks();
  });
  $("#sortSelect").addEventListener("change", event => { state.sort = event.target.value; renderBooks(); });
  $("#clearFilters").addEventListener("click", () => {
    state.category = "Lahat";
    state.query = "";
    state.view = "library";
    $("#searchInput").value = "";
    renderFilters();
    renderBooks();
  });
  $("#backToLibrary").addEventListener("click", () => setView("library"));

  $$(".main-nav [data-view]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    setView(link.dataset.view);
    $("#library").scrollIntoView({ behavior: "smooth" });
  }));
  $("#featureRead").addEventListener("click", () => openReader(getBook($("#featureRead").dataset.id)));
  $("#featureLike").addEventListener("click", () => toggleFavorite($("#featureLike").dataset.id));
  $("#slidePrev").addEventListener("click", () => setFeature(state.featureIndex - 1));
  $("#slideNext").addEventListener("click", () => setFeature(state.featureIndex + 1));
  $("#sliderDots").addEventListener("click", event => {
    const dot = event.target.closest("[data-slide]");
    if (dot) setFeature(Number(dot.dataset.slide));
  });
  let slideTimer = window.setInterval(() => {
    if (!document.hidden && !$("#readerDialog").open && !$("#bookDialog").open) setFeature(state.featureIndex + 1);
  }, 7000);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) window.clearInterval(slideTimer);
    else slideTimer = window.setInterval(() => setFeature(state.featureIndex + 1), 7000);
  });

  $("#dialogRead").addEventListener("click", () => {
    if (!state.selectedBook) return;
    $("#bookDialog").close();
    openReader(state.selectedBook);
  });
  $("#dialogLike").addEventListener("click", () => state.selectedBook && toggleFavorite(state.selectedBook.id));
  $("#synopsisToggle").addEventListener("click", () => {
    state.synopsisOpen = !state.synopsisOpen;
    $("#dialogSynopsis").hidden = !state.synopsisOpen;
    $("#synopsisToggle").textContent = state.synopsisOpen ? "Itago" : "Ipakita";
    $("#synopsisToggle").setAttribute("aria-expanded", String(state.synopsisOpen));
  });
  $("#readerScroll").addEventListener("scroll", () => {
    if (state.selectedBook && $("#readerDialog").open) saveReaderProgress(false, false);
  }, { passive: true });
  $("#readerDialog").addEventListener("close", () => {
    if (state.selectedBook) saveReaderProgress(false, false);
    renderBooks();
  });
  $("#finishReading").addEventListener("click", () => {
    saveReaderProgress(true);
    $("#readerScroll").scrollTo({ top: $("#readerScroll").scrollHeight, behavior: "smooth" });
    $("#finishReading").innerHTML = "Naitala na ang progreso <span aria-hidden=\"true\">✓</span>";
  });
  $("#fontDown").addEventListener("click", () => {
    state.readerFont = Math.max(14, state.readerFont - 1);
    $("#readerCopy").style.fontSize = `${state.readerFont}px`;
  });
  $("#fontUp").addEventListener("click", () => {
    state.readerFont = Math.min(24, state.readerFont + 1);
    $("#readerCopy").style.fontSize = `${state.readerFont}px`;
  });
  $("#themeToggle").addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark"));
  $$("[data-close]").forEach(button => button.addEventListener("click", () => {
    const dialog = document.getElementById(button.dataset.close);
    if (dialog.open) dialog.close();
  }));
  [$("#bookDialog"), $("#readerDialog")].forEach(dialog => dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  }));
  document.addEventListener("keydown", event => {
    if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName) && !$("#bookDialog").open && !$("#readerDialog").open) {
      event.preventDefault();
      $("#searchInput").focus();
    }
  });
}

initialize();
