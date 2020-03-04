import { Component,ViewChild } from '@angular/core';
import { NavController,Platform } from '@ionic/angular';
import { RemoteServiceService } from './../remote-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { AnimationService, AnimationBuilder } from 'css-animator';
import {ThemeSwitcherService }from '../../app/theme-switcher.service';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('myElement', {static:false} ) myElem;
  Book_M:any;
  private animator: AnimationBuilder;
items =

[
  
    
    
  {
      "title": "Rabbana 1",
                  "do1": "Our Lord! Accept (this service) from us: For Thou art the All-Hearing, the All-knowing                    ",
        "do2": "Rabbana taqabbal minna innaka antas Sameeaul Aleem",
                  "do3": "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ العَلِيمُ",
                  "do4": "Mbuye Wathu, Tilandireni (ntchito yathuyi), Ndithudi, Inu ndinu Akumva; Odziwa",
                  "Info": "",
                  "mark": false,
                  "duasAudio": "Dua1.mp3"
  },
  {
      "title": "Rabbana 2",
      "do1": "Our Lord! Make of us Muslims, bowing to Thy (Will), and of our progeny a people Muslim, bowing to Thy (will); and show us our place for the celebration of (due) rites; and turn unto us (in Mercy); for Thou art the Oft-Returning, Most Merciful",
      "do2": "Rabbana wa-j'alna Muslimaini laka wa min Dhurriyatina 'Ummatan Muslimatan laka wa 'Arina Manasikana wa tub 'alaina 'innaka 'antat-Tawwabu-Raheem       ",
      "do3": "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَآ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ",
      "do4": "Mbuye Wathu, Tipangeni kukhala ogonjera Inu, pamodzinso ndi ana athu muwapangenso kukhala pfuko logonjera Inu. Ndipo tidziwitseni (njira) za mapemphero athu; ndipo tikhululukireni. Ndithudi, Inu ndinu wolandira kulapa Mochuluka; Wachisoni",
      "Info": "",
      "mark": true,
      "duasAudio": "Dua2.mp3"
  },
{
  "title": "Rabbana 3",
  "do1": "Our Lord! Grant us good in this world and good in the hereafter, and save us from the chastisement of the fire     ",
  "do2": "Rabbana atina fid-dunya hasanatan wa fil Aakhirati hasanatan waqina 'adhaban-nar    ",
  "do3": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ    ",
  "do4": "Mbuye Wathu, Tipatseni (mtendere) padziko lapansi ndipo Mudzatipatsenso zabwino m'moyo winawo, ndikutitchinjiriza ku chilango chamoto",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua3.mp3"
},
{
  "title": "Rabbana 4",
  "do1": "Our Lord! Bestow on us endurance, make our foothold sure, and give us help against the disbelieving folk    ",
  "do2": "Rabbana afrigh 'alaina sabran wa thabbit aqdamana wansurna 'alal-qawmil-kafirin    ",
  "do3": "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْراً وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى القَوْمِ الكَافِرِينَ    ",
  "do4": "Mbuye Wathu, titsanulireni chipiriro, ndipo limbikitsani mapazi anthu ndipo tithangateni kwa anthu osakhulupirira",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua4.mp3"
},
{
  "title": "Rabbana 5",
"do1": "Our Lord! Condemn us not if we forget or fall into error",
"do2": "Rabbana la tu'akhidhna in-nasina aw akhta'na",
"do3": "رَبَّنَا لاَ تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
"do4": "Mbuye Wathu, musatilange tikaiwala kapena tikalakwitsa",
"Info": "",
"mark": false,
"duasAudio": "Dua5.mp3"
},
{
  "title": "Rabbana 6",
"do1": "Our Lord! Lay not on us a burden Like that which Thou didst lay on those before us",
"do2": "Rabbana wala tahmil alaina isran kama hamaltahu 'alal-ladheena min qablina",
"do3": "رَبَّنَا وَلاَ تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا",
"do4": "Mbuye Wathu, ndipo musatisenzetse mtolo (wamalamulo) monga munawasenzetsera amene adalipo patsogolo pathu",
"Info": "",
"mark": false,
"duasAudio": "Dua6.mp3"
},
{
  "title": "Rabbana 7",
  "do1": "Our Lord! Lay not on us a burden greater than we have strength to bear. Blot out our sins, and grant us forgiveness. Have mercy on us. Thou art our Protector; Help us against those who stand against faith     ",
  "do2": "Rabbana wala tuhammilna ma la taqata lana bihi wa'fu anna waghfir lana wairhamna anta mawlana fansurna 'alal-qawmil kafireen    ",
  "do3": "رَبَّنَا وَلاَ تُحَمِّلْنَا مَا لاَ طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلاَنَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ    ",
  "do4": "Mbuye Wathu, ndipo musatisenzetse chimene sitingachite. Ndipo tifafanizireni, tikhululukireni machimo athu, ndiponso tichitireni chifundo. Inu Ndinu mtetezi Wathu. Choncho tinthangateni ku anthu osakhulupirira",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua7.mp3"
},
{
  "title": "Rabbana 8",
  "do1": "Our Lord! (they say), Let not our hearts deviate now after Thou hast guided us, but grant us mercy from Thine own Presence; for Thou art the Grantor of bounties without measure",
  "do2": "Rabbana la tuzigh quloobana ba'da idh hadaitana wa hab lana milladunka rahmah innaka antal Wahhab ",
  "do3": "رَبَّنَا لاَ تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
  "do4": "Mbuye Wathu, musaikhotetse mitima yathu pambuyo potiongola. Tipatseni chifundo chochokera kwa Inu. Ndithudi, Inu Ndinu wopatsa kwambiri",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua8.mp3"
},
{
  "title": "Rabbana 9",
  "do1": "Our Lord! Thou art He that will gather mankind Together against a day about which there is no doubt; for Allah never fails in His promise.",
  "do2": "Rabbana innaka jami'unnasi li-Yawmil la raiba fi innallaha la yukhliful mi'aad ",
  "do3": "رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لاَّ رَيْبَ فِيهِ إِنَّ اللّهَ لاَ يُخْلِفُ الْمِيعَادَ",
  "do4": "Mbuye Wathu, Ndithudi ife takhulupirira; choncho tikhululukireni machimo athu ndikutipewetsa kuchilango chamoto",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua9.mp3"
},
{
  "title": "Rabbana 10",
  "do1": "Our Lord! We have indeed believed: forgive us, then, our sins, and save us from the agony of the Fire",
  "do2": " Rabbana innana amanna faghfir lana dhunuubana wa qinna 'adhaban-Naar",
  "do3": "رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ",
  "do4": "Mbuye Wathu, tazikhulupirira zimene mwavumbulutsa; ndipo tamtsata mtumikiyo, choncho tilembeni pamodzi ndi oikira umboniwo",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua10.mp3"
},
{
  "title": "Rabbana 11",
  "do1": "Our Lord! We believe in what Thou hast revealed, and we follow the Messenger. Then write us down among those who bear witness",
  "do2": "Rabbana amanna bima anzalta wattaba 'nar-Rusula fak-tubna ma'ash-Shahideen ",
  "do3": "رَبَّنَآ ءَامَنَّا بِمَآ أَنزَلْتَ وَٱتَّبَعْنَا ٱلرَّسُولَ فَٱكْتُبْنَا مَعَ ٱلشَّٰهِدِينَ",
  "do4": "Mbuye Wathu, tikhululukireni machimo athu ndi kupyola malire kwathu m'zinthu zathu; ndipo limbikitsani mapazi anthu (panjira Yanu) ndipo tithandizeni ku anthu osakhulupirira",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua11.mp3"
},
{
  "title": "Rabbana 12",
  "do1": "Our Lord! Forgive us our sins and anything We may have done that transgressed our duty: Establish our feet firmly, and help us against those that resist Faith",
  "do2": " Rabbana-ghfir lana dhunuubana wa israfana fi amrina wa thabbit aqdamana wansurna 'alal qawmil kafireen    ",
  "do3": "ربَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَِ",
  "do4": "Mbuye Wathu, tipatseni zimene mudatilonjeza kupyolera mwa atumuki Anu ndipo musazatisambule tsiku lachimaliziro; ndithudi, Inu simuswa lonjezo",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua12.mp3"
},
{
  "title": "Rabbana 13",
  "do1": "Our Lord! Not for naught Hast Thou created (all) this! Glory to Thee! Give us salvation from the penalty of the Fire",
  "do2": "Rabbana ma khalaqta hadha batila Subhanaka faqina 'adhaban-Naar ",
  "do3": "رَبَّنَا مَا خَلَقْتَ هَذا بَاطِلاً سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ",
  "do4": "Mbuye Wathu, takhulupirira; choncho tilembeni pamodzi ndi oikira umboni (choonadi)",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua13.mp3"
},
{
  "title": "Rabbana 14",
  "do1": "Our Lord! Any whom Thou dost admit to the Fire, Truly Thou coverest with shame, and never will wrong-doers Find any helpers!",
  "do2": "Rabbana innaka man tudkhilin nara faqad akhzaytah wa ma liDh-dhalimeena min ansar ",
  "do3": "رَبَّنَا إِنَّكَ مَن تُدْخِلِ النَّارَ فَقَدْ أَخْزَيْتَهُ وَمَا لِلظَّالِمِينَ مِنْ أَنصَارٍ",
  "do4": "Mbuye Wathu, Tadzichitira tokha zoipa; ngati simutikhululukira ndi kuchita nafe chifundo ndiye kuti tikhala mwa otaika",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua14.mp3"
},
{
  "title": "Rabbana 15",
  "do1": "Our Lord! We have heard the call of one calling (Us) to Faith, 'Believe ye in the Lord,' and we have believed",
  "do2": "Rabbana innana sami'na munadiyany-yunadi lil-imani an aminu bi Rabbikum fa'aamanna ",
  "do3": "رَّبَّنَا إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِي لِلإِيمَانِ أَنْ آمِنُواْ بِرَبِّكُمْ فَآمَنَّا",
  "do4": "Mbuye Wathu, musatiike pamodzi ndi anthu ochita zoipa (Tikhululukireni zolakwa zathu. Tilowetseni ku Jannah)",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua15.mp3"
},
{
  "title": "Rabbana 16",
  "do1": "Our Lord! Forgive us our sins, blot out from us our iniquities, and take to Thyself our souls in the company of the righteous",
  "do2": " Rabbana faghfir lana dhunoobana wa kaffir 'ana saiyi'aatina wa tawaffana ma'al Abrar",
  "do3": "رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الأبْرَارِ",
  "do4": "Mbuye Wathu, weruzani mwachoonadi pakati pathu ndi pakati pa anthu athu Inu Ngabwino poweruza kuposa oweruza",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua16.mp3"
},
{
  "title": "Rabbana 17",
  "do1": "Our Lord! Grant us what Thou didst promise unto us through Thine apostles, and save us from shame on the Day of Judgment: For Thou never breakest Thy promise",
  "do2": "Rabbana wa 'atina ma wa'adtana 'ala rusulika wa la tukhzina yawmal-Qiyamah innaka la tukhliful mi'aad ",
  "do3": "رَبَّنَا وَآتِنَا مَا وَعَدتَّنَا عَلَى رُسُلِكَ وَلاَ تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لاَ تُخْلِفُ الْمِيعَاد    ",
  "do4": "Mbuye Wathu, titsanulireni chipiriro; ndipo tipatseni imfa uku tili Asilamu (ogonjera Inu)",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua17.mp3"
},
{
  "title": "Rabbana 18",
  "do1": "Our Lord! We believe; write us down among the witnesses",
  "do2": "Rabbana aamana faktubna ma' ash-shahideen ",
  "do3": "رَبَّنَا آمَنَّا فَاكْتُبْنَا مَعَ الشَّاهِدِينَ",
  "do4": "Mbuye Wathu, musatichite kukhala onzunzidwa ndi anthu oipa; Ndipo tipulumutseni ku anthu osakhulupirira",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua18.mp3"
},
{
  "title": "Rabbana 19",
  "do1": "O Allah our Lord! Send us from heaven a table set (with viands), that there may be for us - for the first and the last of us - a solemn festival and a sign from thee; and provide for our sustenance, for thou art the best Sustainer (of our needs)",
  "do2": "Rabbana anzil 'alaina ma'idatam minas-Samai takunu lana 'idal li-awwa-lina wa aakhirna wa ayatam-minka war-zuqna wa anta Khayrul-Raziqeen ",
  "do3": "رَبَّنَا أَنزِلْ عَلَيْنَا مَآئِدَةً مِّنَ السَّمَاء تَكُونُ لَنَا عِيداً لِّأَوَّلِنَا وَآخِرِنَا وَآيَةً مِّنكَ وَارْزُقْنَا وَأَنتَ خَيْرُ الرَّازِقِينَ",
  "do4": "Mbuye Wanga, ndichiteni kukhala wopemphera swala pamodzi ndi mbumba yanga Mbuye Wathu, landirani zopempha zanga",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua19.mp3"
},
{
  "title": "Rabbana 20",
  "do1": "Our Lord! We have wronged our own souls: If thou forgive us not and bestow not upon us Thy Mercy, we shall certainly be lost",
  "do2": " Rabbana zalamna anfusina wa il lam taghfir lana wa tarhamna lanakoonanna minal khaasireen  ",
  "do3": "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ    ",
  "do4": "Mbuye Wathu, ndikhululukireni ine ndi makolo anga ndi amene akhulupirira, (makamaka) patsiku la chiwerengero (Kiyama)",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua20.mp3"
},
{
  "title": "Rabbana 21",
  "do1": "Our Lord! Send us not to the company of the wrong-doers",
  "do2": "Rabbana la taj'alna ma'al qawwmi-dhalimeen   ",
  "do3": "رَبَّنَا لاَ تَجْعَلْنَا مَعَ الْقَوْمِ الظَّالِمِينَ",
  "do4": "Mbuye Wanga, achitireni chisoni (makolo anga)  monga momwe ankandilerera ku ubwana",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua21.mp3"
},
{
  "title": "Rabbana 22",
  "do1": "Our Lord! Decide Thou between us and our people in truth, for Thou art the best to decide ",
  "do2": " Rabbanaf-tah bainana wa baina qawmina bil haqqi wa anta Khairul Fatiheen    ",
  "do3": "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ",
  "do4": "Mbuye Wathu, tipatseni chifundo chochokera kwa Inu, ndipo tikonzereni chiongoko m'zochita zathu",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua22.mp3"
},
{
  "title": "Rabbana 23",
  "do1": "Our Lord! Pour out on us patience and constancy, and take our souls unto thee as Muslims (who bow to thy will)",
  "do2": "Rabbana afrigh 'alaina sabraw wa tawaffana Muslimeen ",
  "do3": "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
  "do4": "Mbuye wanga! Ndionjezereni nzeru",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua23.mp3"
},
{
  "title": "Rabbana 24",
  "do1": "Our Lord! Make us not a trial for those who practise oppression; And deliver us by Thy Mercy from those who reject (Thee)",
  "do2": "Rabbana la taj'alna fitnatal lil-qawmidh-Dhalimeen wa najjina bi-Rahmatika minal qawmil kafireen    ",
  "do3": "رَبَّنَا لاَ تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ الظَّالِمِينَ ; وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ",
  "do4": "Mbuye Wathu, Takhulupirira; choncho tikhululukireni Ndikutichitira chifundo ndipo inu Ngabwino kwambiri kuposa (ena onse) Ochita chifundo",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua24.mp3"
},
{
  "title": "Rabbana 25",
  "do1": "O our Lord! Truly Thou dost know what we conceal and what we reveal: for nothing whatever is hidden from Allah, whether on earth or in heaven",
  "do2": " Rabbanaaa innaka ta'lamu maa nukhfee wa maa nu'lin; wa maa yakhfaa 'alal laahi min shai'in fil ardi wa laa fis samaaa'",
  "do3": "رَبَّنَا إِنَّكَ تَعْلَمُ مَا نُخْفِي وَمَا نُعْلِنُ وَمَا يَخْفَى عَلَى اللّهِ مِن شَيْءٍ فَي الأَرْضِ وَلاَ فِي السَّمَاء",
  "do4": "Mbuye Wathu, tichotsereni chilango cha Jahannama; Ndithu chilango chake nchosasiyana nacho. Ndithu iyo ndi malo woipa; ndiponso pokhala poipa",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua25.mp3"
},
{
  "title": "Rabbana 26",
  "do1": "O our Lord! And accept my Prayer",
  "do2": " Rabbana wa taqabbal Du'a",
  "do3": "رَبَّنَا وَتَقَبَّلْ دُعَاء",
  "Info": "Mbuye Wathu, tipatseni mwa akazi athu ndi ana athu chotonthoza maso Ndipo tichiteni kukhala atsogoleri a oopa Mulungu",
  "mark": false,
  "duasAudio": "Dua26.mp3"
},
{
  "title": "Rabbana 27",
  "do1": "O our Lord! Cover (us) with Thy Forgiveness - me, my parents, and (all) Believers, on the Day that the Reckoning will be established! ",
  "do2": "Rabbana ghfir li wa li wallidayya wa lil Mu'mineena yawma yaqumul hisaab ",
  "do3": "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
  "do4": "Mbuye Wathu, Chifundo ndi kudziwa Kwanu kwakwanira pa chinthu chilichonse; khululukirani amene alapa ndi kutsatira njira Yanu; ndipo apewetseni ku chilango cha Jahena",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua27.mp3"
},
{
  "title": "Rabbana 28",
  "do1": "Our Lord! Bestow on us Mercy from Thyself, and dispose of our affair for us in the right way! ",
  "do2": " Rabbana 'atina mil-ladunka Rahmataw wa haiyi lana min amrina rashada    ",
  "do3": "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
  "do4": "Mbuye Wathu, ndipo alowetseni ku minda ya muyaya imene mudawalonjeza; ndi amene adachita zabwino mwa atate awo ndi akazi awo ndi ana awo. Ndithu, inu ndi Amphamvu Zoposa Anzeru Zakuya Ndipo apewetseni ku zoipa; tsono amene mudzampewetsa ku zoipa tsiku limenelo, ndiye kuti mwamchitira chifundo. Ndipo kumeneko ndiko kupambana kwakukulu",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua28.mp3"
},
{
  "title": "Rabbana 29",
  "do1": "Our Lord! We fear lest he hasten with insolence against us, or lest he transgress all bounds",
  "do2": "Rabbana innana nakhafu ai-yafruta 'alaina aw any-yatgha",
  "do3": "رَبَّنَا إِنَّنَا نَخَافُ أَن يَفْرُطَ عَلَيْنَا أَوْ أَن يَطْغَى",
  "do4": "Mbuye Wathu, Tikhululukireni ndi anzathu amene adatitsogolera pa chikhulupiriro, ndipo musaike mmitima mwathu njiru ndi chidani kwa amene adakhulupirira Mbuye Wathu, Inu Ndinu Wodekha Wachisoni Chosatha ",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua29.mp3"
},
{
  "title": "Rabbana 30",
  "do1": "Our Lord! We believe; then do Thou forgive us, and have mercy upon us: For Thou art the Best of those who show mercy",
  "do2": "Rabbana amanna faghfir lana warhamna wa anta khairur Rahimiin ",
  "do3": "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنتَ خَيْرُ الرَّاحِمِينَ",
  "do4": "Mbuye Wathu, Kwa Inu tatsamira; Ndipo kwa Inu tatembenukira ndiponso kobwerera Nkwa Inu",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua30.mp3"
},

{
  "title": "Rabbana 31",
  "do1": "Our Lord, make us not (objects of) torment for the disbelievers and forgive us, our Lord. Indeed, it is You who is The Exalted in Might, The Wise",
  "do2": "Rabbanaa la taj alnaa fitnatallilladheena kafaroo waghfirlanaa Rabbanaa innaka antal Azeezul-Hakim ",
  "do3": "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
  "do4": "Mbuye Wathu, Musatichite kukhala mayeso kwa amene sadakhulupirire, tikhululukireni Mbuye Wathu Ndithu Inu Ndinu Amphamvu Zopambana Ndiponso Anzeru Zakuya",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua31.mp3"
},

{
  "title": "Rabbana 32",
  "do1": "Our Lord, perfect for us our light and forgive us Indeed, You are over all things competent",
  "do2": "Rabbanaa atmim lanaa nooranaa waighfirlanaa innaka 'ala kulli shay-in qadeer",
  "do3": "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
  "do4": "Mbuye Wathu, Tikwanitsireni dangalira lathu (Mpaka likatifikitse ku munda wa Mtendere); ndiponso tikhululukireni Ndithu Inu ndi Okhoza chilichonse",
  "Info": "",
  "mark": false,
  "duasAudio": "Dua32.mp3"
}


];
url = './rabannas_data.json';


  data: any;
  category: any;
  LovelyLoader = false;

  constructor(private storage: Storage, public platform: Platform,
    public loadingController: LoadingController,
    public themeSwitcher: ThemeSwitcherService, public navCtrl: NavController,animationService: AnimationService, private router: Router,private httpService:RemoteServiceService) {

    // this.animator = animationService.builder();
    this.Details;





// this.presentLoadingWithOptions();

  console.log('==================');
    
    if (this.platform.is('ios') ) {
    
      this.storage.get('ThemeMode').then((res) => {
      
  
        if(res === 'day'){
          this.themeSwitcher.setTheme('day');
        }

        if(res === 'night'){
          this.themeSwitcher.setTheme('night');
        }
      
  
      });
    }
      else{

        // if (localStorage.getItem("ThemeMode")){

     
        // let VA = JSON.parse(localStorage.getItem("ThemeMode"));
     
        // console.log(VA);
        
        // if(VA === 'day'){
        //   this.themeSwitcher.setTheme('day');
        // }

        // if(VA === 'night'){
        //   this.themeSwitcher.setTheme('night');
        // }

      // }
      }

// this.read_data();

  // this.httpService.getListing().subscribe(res => {
    // this.items = ;
  // });

  this.LovelyLoader = false;


  
  }

  // read_data(){
  //   fetch('../../assets/rabannas_data.json').then(res => res.json())
  //   .then(json => {
  //     this.items = json;
  //     console.log(this.data);
  //   });
  // }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 1000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }


  ngOnInit(){
  
  }


  ionViewCanEnter(){
  
  }

  // animateElem() {
  //   this.animator.setType('flipInX').show(this.myElem.nativeElement);
  // }


  Details(){
   
  }

  OpenDetail(a){
    console.log(a.title);
    
    let navigationExtras: NavigationExtras = {
      queryParams: {
        current: a.title
      }
    }
    this.navCtrl.navigateForward(['rabbana-list'], navigationExtras);
  }

  settingsPage(){
    this.router.navigate(['settings']);
  }





}
