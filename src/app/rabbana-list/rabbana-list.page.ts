import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Location } from "@angular/common";
import { NavController, Platform, AlertController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { RemoteServiceService } from '../remote-service.service';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx'; 
import { File } from '@ionic-native/file/ngx';
// import { FileChooser } from '@ionic-native/file-chooser/ngx';
// import { FilePath } from '@ionic-native/file-path/ngx';
import { Storage } from '@ionic/storage';
import { browser } from 'protractor';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { MediaObject, Media } from '@ionic-native/media/ngx';
import {  LoadingController } from '@ionic/angular';

import { CalPage } from './calender_Time';
import { ModalController } from '@ionic/angular';

declare var cordova: any;
import { IonSlides } from '@ionic/angular';
import { IfStmt } from '@angular/compiler';
 

@Component({
  selector: 'app-rabbana-list',
  // template: '<button (click)="OpenDetail(a)>click</button>',
  templateUrl: './rabbana-list.page.html',
  styleUrls: ['./rabbana-list.page.scss']
})

export class RabbanaListPage implements OnInit {
  @ViewChild('mySlider', {static: true}) slides: IonSlides;

  storageDirectory: string = '';
  private fileTransfer: FileTransferObject = this.filetransfer.create();
  public sendTo   : any;
  public subject  : string = 'Message from Social Sharing App';
  public message  : string = 'Take your app development skills to the next level with Mastering Ionic - the definitive guide';
  segment = 0;
  //list received from route
  data: any;
  favdata:any=[];
  AllList = 
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


]
;
  maindata=[];
  rdata=[];
  category:any;
  currentActive:any;
  //fresh data variable
  filteredList_3:any;
  filteredList_1:any;
  filteredList_2:any;
  filteredTitle:any;
  mark:any;
  duasAudio:any;
  //.a
  noresulttext=false;
  copyX = true;
  segMeChange = 0;
  //.
  lastCopy = false;
  //change color dynamic
  buttonColor: string = '#000'; //Default Color
  //for content
  showHide_1 = true;
  showHide_2 = true;
  showHide_3 = true; 
  showHide_4 = true; 
 
  //for icons
  showMinus1 = false;
  showPlus1 = true;
  showMinus2 = false;
  showPlus2 = true;
  showMinus3 = false;
  showPlus3 = true;
  showMinus4 = false;
  showPlus4 = true;

  //onPageLoad
  ShowPlay = false;
  text: string;
  url: string;
  lists: any = [];
  searchList: any;
  list: any;
  copy = false;

  //local BookMark
  StarList = [];
  http: any;
  listShow = false;
  do3: any;
  do1: any;
  do2: any;
  // duas: string;

  // my logic
  itemisselected = false;

  // spotify like music player

  title: any;
  artist: any;
  image: string = 'assets/album_art.jpg';

  duration: any = -1;
  curr_playing_file: MediaObject;
  // storageDirectory: any;

  position: any = 0;
  get_position_interval: any;
  is_playing = false;
  is_in_play = false;
  is_ready = false;
  get_duration_interval: any;
  display_position: any = '00:00';
  display_duration: any = '00:00';
  segments :any;


  constructor(
    public navCtrl: NavController, 
    public platform: Platform,
     private remoteServiceService: RemoteServiceService, 
     private nativeAudio: NativeAudio, 
     private route: ActivatedRoute,
     private router: Router, 
     private location: Location,
     private socialSharing: SocialSharing,
     private storage: Storage,
     private file: File,
     private filetransfer: FileTransfer,
     private media: Media,
     private plt: Platform,
     private LocalNotifications: LocalNotifications,
     private alertCtrl: AlertController,
     public modalController: ModalController

     ) {

    
      // this.platform.ready().then(() => {
      //   // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
      //   if(!this.platform.is('cordova')) {
      //     return false;
      //   }
  
      //   if (this.platform.is('ios')) {
      //     this.storageDirectory = cordova.file.documentsDirectory;
      //   }
      //   else if(this.platform.is('android')) {
      //     this.storageDirectory = cordova.file.externalDataDirectory;
      //   }
      //   else {
        
      //     return false;
      //   }
      // })
  

      // this.remoteServiceService.getListing().subscribe(res => {
    
      //   this.AllList = res;
      // });

   
        // fetch('../../assets/rabannas_data.json').then(res => res.json())
        // .then(json => {
        //   this.AllList = json;
        //   console.log(this.data);
        // });
      

      this.ShowPlay = false;

    // this.route.queryParams.subscribe(_params => {
      // if (this.router.getCurrentNavigation().extras.state) {
      
  

      

        // this.copyX = true;

        
        this.data = '';
          // this.data = this.router.getCurrentNavigation().extras.state.current;
          // this.AllList = this.router.getCurrentNavigation().extras.state.AllList;
          console.log('=========================='+this.data);

          if(this.data){

            console.log('=========================='+this.data);
            // setTimeout(() => {
            //   this.slides.slideTo(10,0);
            // });

         
          }

          if(this.data){
            
            console.log('On Page Load from Last=======');

  
            console.log(this.category);
            console.log(this.lists);
            console.log(this.duasAudio);
            console.log(this.data.duasAudio);
            console.log(this.AllList);
                         
              console.log('.'+this.AllList);
   
      }

    

         
    // }); 


    // console.log('LOCAL STORAGE JS/WORK ON ANDROID.'+localStorage.getItem("BookMarkList"));

    // if(this.copyX = true){
    //   console.log(this.duasAudio);
    //   this.nativeAudio
    //   .preloadComplex('track1', this.duasAudio, 1, 1, 0)
    //   .then(this.onSuccessPreloading, this.onError);
    //   this.ShowPlay = true;
    // }
    
   }

async  ngOnInit() {
console.log("sad==================================sdsdsdAWE")
      this.route.queryParams.subscribe(params => {
        console.log("HAPPY============"+params.current)
        this.Check({'title':params.current});
        this.recentlyViewed({'title':params.current});
      });
      

  
      this.curr_playing_file.stop();
    

      // setTimeout(() => {
      //   this.prepareAudioFile();
      // }, 2000)

  }

  prepareAudioFile() {
    this.display_position = '00:00';
    this.display_duration  = '00:00';
    this.position = 0;

    this.platform.ready().then((res) => {
      this.getDuration();
    
    });

    
  }


  getDuration() {

    let duas = '';
    duas = this.duasAudio
    const play_The_track = `${cordova.file.applicationDirectory}www/assets/DuasAudio/${duas}`;

    // let play_The_track: string = "/android_asset/public/assets/GOT.mp3"; //note this specific url format is used in android only

    this.curr_playing_file = this.media.create(play_The_track);
    // on occassions, the plugin only gives duration of the file if the file is played
    // at least once
    this.curr_playing_file.play();

    this.curr_playing_file.setVolume(0.0);  // you don't want users to notice that you are playing the file
    const self = this;
    // The plugin does not give the correct duration on playback start
    // Need to check for duration repeatedly
    let temp_duration = self.duration;
    this.get_duration_interval = setInterval(() => {
      if (self.duration === -1 || !self.duration) {
        self.duration = ~~(self.curr_playing_file.getDuration());  // make it an integer
      } else {
        if (self.duration !== temp_duration) {
          temp_duration = self.duration;
        }
        else {
          self.curr_playing_file.stop();
          self.curr_playing_file.release();

          clearInterval(self.get_duration_interval);
          this.display_duration = this.toHHMMSS(self.duration);
          self.setToPlayback();
        }
      }
    }, 100);
  }


  setToPlayback() {

    let duas = this.duasAudio;
    const play_The_track = `${cordova.file.applicationDirectory}www/assets/DuasAudio/${duas}`;

    this.curr_playing_file = this.media.create(play_The_track);
    this.curr_playing_file.onStatusUpdate.subscribe(status => {
      switch (status) {
        case 1:
          break;
        case 2:   // 2: playing
          this.is_playing = true;
          break;
        case 3:   // 3: pause
          this.is_playing = false;
          break;
        case 4:   // 4: stop
        default:
          this.is_playing = false;
          break;
      }
    });
    this.is_ready = true;
    this.getAndSetCurrentAudioPosition();
  }

  getAndSetCurrentAudioPosition() {
    console.log('inside ')
    const diff = 1;
    const self = this;
    this.get_position_interval = setInterval(() => {
      const last_position = self.position;
      self.curr_playing_file.getCurrentPosition().then((position) => {
        if (position >= 0 && position < self.duration) {
          if (Math.abs(last_position - position) >= diff) {
            // set position
            self.curr_playing_file.seekTo(last_position * 1000);

          } else {
            // update position for display
            self.position = position;
            console.log('self.positionself.positionself.positionself.positionself.positionself.position'+self.position);
            
            this.display_position = this.toHHMMSS(self.position);
          }
        } else if (position >= self.duration) {
          self.stop();
          // self.setToPlayback();
        }
      });
    }, 100);
  }

  play() {
    this.curr_playing_file.play();
  }

  pause() {
    this.curr_playing_file.pause();
  }

  stop() {
    this.curr_playing_file.stop();
    this.curr_playing_file.release();
    clearInterval(this.get_position_interval);
    this.position = 0;
  }

  controlSeconds(action) {
    const step = 5;
    const numberRange = this.position;
    switch (action) {
      case 'back':
        this.position = numberRange < step ? 0.001 : numberRange - step;
        break;
      case 'forward':
        this.position = numberRange + step < this.duration ? numberRange + step : this.duration;
        break;
      default:
        break;
    }
  }

  // ngOnDestroy() {
  //   this.stop();
  // }

  toHHMMSS(secs) {
    var sec_num = parseInt(secs, 10)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [minutes, seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v, i) => v !== "00" || i >= 0)
      .join(":")
  }





  /**  Search Filter Function Starts **/

  FilterData(){
    let TRY = this.AllList.filter(
      book => book.title === this.data.title);

      this.filteredList_3 = TRY[0].do3;
      this.filteredList_1 = TRY[0].do1;
      this.filteredList_2 = TRY[0].do2;
      this.filteredTitle= TRY[0].title;
      console.log(this.filteredList_3);


      console.log("TRY"+JSON.stringify(TRY));
  }


  setFilteredItems() {
    // if (!this.searchList) {
    //   return;
    // }
    if(!this.itemisselected){
      this.listShow = true;
    } else {
      this.itemisselected = false;
    }
    console.log(this.searchList)
  
    this.lists = this.remoteServiceService.filterItems(this.searchList);
    console.log(this.lists)
    if(this.lists==undefined){
      this.noresulttext=false;
   }
    else if(this.lists.length==0){
      this.noresulttext=true;
   }
    console.log('?FILTERED ITEMS FROM REMOTE SERVICE = '+JSON.stringify(this.lists)); 
  }

  // call a function to refresh values in component.

  Chk(Nlist){

  
    console.log(Nlist);
    console.log(this.searchList);
    
    console.log(this.category);

    this.category = this.searchList;
    this.filteredTitle = Nlist.title;
    this.filteredList_1 = Nlist.do1;
    this.filteredList_2 = Nlist.do2;
    this.filteredList_3 = Nlist.do3;

    this.duasAudio= Nlist.duasAudio;

    if(this.filteredList_1 != ''){
      this.listShow = false;
      this.searchList = Nlist.title;
      this.itemisselected = true;
    }
    this.mark = Nlist.mark;
    this.copyX = true;
    this.lastCopy = false;
  }

  // It finished here.



  // Share social media


  share(data){
   this.platform.ready().then(() =>
   {
    
      this.socialSharing.share(data.do3+ "\n" +data.do2+ "\n" +data.do1, data.title, null, "https://play.google.com/store/apps/details?id=com.chaks.rabbana").then(() => {
        console.log('socialSharing ');
      }).catch(e => {
        console.log(' Error');
      })
    
  });
  }



  // Make A theme

  
  addEvent(){
    this.buttonColor = '#345465'; 
    }


 async Check(New){

  console.log('HAPPY 2'+JSON.stringify(New));

 
  
  this.AllList.forEach( el => {
    if(el.title === New.title) {
      this.category = el;
    }
  })
  console.log(New.title);
   this.listShow=false;
    // this.category=New.title;
    this.filteredList_3 = New.do3;
    this.filteredList_1 = New.do1;
    this.filteredList_2 = New.do2;
    this.filteredTitle= New.title;
    this.copy = true;
    this.duasAudio= New.duasAudio;
    this.mark = New.mark;
//Mark

if (this.platform.is('ios') ) {
      await this.storage.get('BookMarkList').then((res) => {
        if(!res)
        this.mark=false;
      else if(res.indexOf(New.title)==-1)
      this.mark=false;
      else
      this.mark=true;
  });

 }
 else
 {

  console.log('1=========================');
  
 var res=JSON.parse(localStorage.getItem('BookMarkList'));
 if(!res)
 this.mark=false;
 else if(res.indexOf(New.title)==-1)
      this.mark=false;
      else
      this.mark=true;


      //

  
//

 }

 console.log('2=========================');
 console.log(this.AllList);
 

   this.copyX = true;
   this.lastCopy = false;
   this.currentActive=New.title;
   console.log('segment Before'+this.segment);
   
   var matches=this.currentActive.match(/(\d+)/);
   console.log('matches'+matches);
   var x = 1;
   var negX = ( -x );
   
   this.slides.slideTo(matches[0]-1);
console.log(matches+negX);

var Match = matches+(negX);
console.log('Match'+Match);


//mark


// this.Check(New);
    // this.slides.slideTo(matches+negX);
  // this.slides.update();

// this.slideChanged();
  //  let getActive =  this.slides.getActiveIndex();
  //  console.log('getActiveee'+getActive);
  //  this.focusSegment(this.segment+1);
    // this.focusSegment(this.segment+1);


  }

  focusSegment(segmentId) {
    document.getElementById('seg-'+segmentId).scrollIntoView({ 
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }

  Check2(){

    console.log(this.duasAudio);
    // this.prepareAudioFile();
    this.slides.slidePrev();

  }

  Check3(){

    console.log(this.duasAudio);
    // this.prepareAudioFile();
    this.slides.slideNext();

  }


  playAudio(){
    let duas = this.duasAudio;
    console.log(duas);

    console.log('../../assets/DuasAudio/'+duas);
    
    this.nativeAudio.play('../../assets/DuasAudio/'+duas).then((data) =>{
      console.log(duas+ 'is playing');
    });
  
  }



  duas(duas: any) {
    throw new Error("Method not implemented.");
  }

  StopAudio(){

    let duas = this.duasAudio;

    this.nativeAudio.stop(duas).then(this.onSuccess,this.onError);
    this.ShowPlay = false;
  }

  Adjust_Volume(){
    this.nativeAudio.setVolumeForComplexAsset('track1', 0.6).then(this.onSuccess,this.onError);
  }

  onSuccess(){
    console.log(' onSuccess .');
  }

  onSuccessPreloading = data => {
    console.log("success preloading", data);
    this.nativeAudio.play("track1").then(this.onSuccessPlaying, this.onError);
  };

  onError(){
    console.log('error Playing');
  }

  onSuccessPlaying(){
    console.log('onSuccessPlaying');
  }

  BackButton(){
    this.location.back();
  }


checkEXTRA(){
  console.log(this.segment);
  
}





slideChanged() {

 

   this.slides.getActiveIndex().then(data=>{

     console.log(this.AllList[data]);

     this.recentlyViewed(this.AllList[data]);

     this.prepareAudioFile();
this.segMeChange = data;

console.log(this.AllList[data]);

    this.Check(this.AllList[data]);
    this.focusSegment(this.segMeChange);
  });

 

  }


  async recentlyViewed(x){
    if (this.platform.is('ios') ) {
      await this.storage.get('Recentv').then((res) => {
       if(!res)
         this.rdata=[];
       else
       this.rdata=res;
      });


      if(this.rdata.indexOf(x.title)==-1)
      this.rdata.push(x.title);
      if(this.rdata.length>10){
        this.rdata.shift();
        }
      this.storage.set('Recentv',this.rdata);
     }
     else{
     var res=JSON.parse(await  localStorage.getItem('Recentv'));
     if(!res)
     this.rdata=[];
     else
     this.rdata=res;
 
      if(this.rdata.indexOf(x.title)==-1)
      this.rdata.push(x.title);
      if(this.rdata.length>10){
        this.rdata.shift();
        }
     localStorage.setItem('Recentv',JSON.stringify(this.rdata));
     }
  }




  // categoryChanged(value) {
    
  //   this.stop();
  //   this.prepareAudioFile();

  //   console.log('segment is 55', JSON.stringify(value['detail']['value']));
 
   
  //     if (this.platform.is('ios') ) {

  //   this.storage.get('BookMarkList').then((val) => {
  //     this.maindata=val;
  //     console.log(val.indexOf(this.duasAudio));
  //     if(this.maindata.indexOf(this.duasAudio)>=0){
  //       this.mark=true;
  //     }
  //     else{
  //       this.mark=false;
  //     }
  //       }); 
  //     }
  //     else{
  //       var vallocal=localStorage.getItem('BookMarkList');
    
  //       if(vallocal.indexOf(this.duasAudio)>=0){
  //         this.mark=true;
  //       }
  //       else{
  //         this.mark=false;
  //       }
  //     }
  // }



  Ctrl_version_1(){
    this.showHide_1 = true;
    this.showMinus1 = false;
    this.showPlus1 = true;
  }

  Ctrl_version_2(){
    this.showHide_2 = true;
    this.showMinus2 = false;
    this.showPlus2 = true;
  }

  Ctrl_version_3(){
    this.showHide_3 = true;
    this.showMinus3 = false;
    this.showPlus3 = true;
  }

  Ctrl_version_4(){
    this.showHide_4 = true;
    this.showMinus4 = false;
    this.showPlus4 = true;
  }

  Ctrl2_version_1(){
    this.showHide_1 = false;
    this.showPlus1 = false;
    this.showMinus1 = true;
  }

  Ctrl2_version_2(){
    this.showHide_2 = false;
    this.showPlus2 = false;
    this.showMinus2 = true;
  }

  Ctrl2_version_3(){
    this.showHide_3 = false;
    this.showPlus3 = false;
    this.showMinus3 = true;
  }


  Ctrl2_version_4(){
    this.showHide_4 = false;
    this.showPlus4 = false;
    this.showMinus4 = true;
  }

  async changetm(){
    this.router.navigate(['recentlyviewed']);
    

    
    // this.Cal_View = true;


// const modal = await this.modalController.create({
//   component: CalPage,
// });
// return await modal.present();


    // this.calendar.createCalendar('MyCalendar').then(
    //   (msg) => { console.log(msg); },
    //   (err) => { console.log(err); }
    // );

//     this.calendar.createEvent(title, location, notes, startDate,    endDate).then(
//       (msg) => { alert(msg); },
//       (err) => { alert(err); }
//  ); 


    //change color dynamic
    // alert("hello");
  // buttonColor: string = 'black'; //Default Color


  // this.LocalNotifications.schedule({
  //   text: 'I will remind you.',
  //   trigger: {at: new Date(new Date().getTime() + 3600)},
  //   led: 'FF0000',
  //   sound: null
  // });

// this.localNotifications.schedule({
//   id: 1,
//   text: 'Single ILocalNotification',
//   sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
//   data: { secret: key }
// });


  }

  DuaListing(){
    this.router.navigate(['home']);
  }

  DownloadFile(){
    console.log('dfdf');
    let duas = this.duasAudio;
    console.log(this.duasAudio);

    this.platform.ready().then(() => {

      const imageLocation = `${cordova.file.applicationDirectory}www/assets/DuasAudio/${duas}`;
// alert('imageLocation'+imageLocation);
      this.fileTransfer.download(imageLocation, this.storageDirectory + duas).then((entry) => {

        alert('Downloaded successfully.'+JSON.stringify(entry));

      }, (error) => {

        alert('Error downloading mp3.'+JSON.stringify(error));

      });

    });
    
   
  }

  async starItem(x,chk){
    this.mark=chk;  
    if (this.platform.is('ios') ) {
     await this.storage.get('BookMarkList').then((res) => {
      if(!res)
        this.favdata=[];
      else
      this.favdata=res;
     });
     if(chk==true)
     this.favdata.push(x.title);
     else if(this.favdata.indexOf(x.title)!==-1)
     this.favdata.splice(this.favdata.indexOf(x.title),1); 
     this.storage.set('BookMarkList',this.favdata);
    }
    else{
    var res=JSON.parse(await  localStorage.getItem('BookMarkList'));
    if(!res)
    this.favdata=[];
    else
    this.favdata=res;
    if(chk==true)
    this.favdata.push(x.title);
    else if(this.favdata.indexOf(x.title)!==-1)
    this.favdata.splice(this.favdata.indexOf(x.title),1);
   localStorage.setItem('BookMarkList',JSON.stringify(this.favdata));
    }
 

}



  replaceByValue( field, oldvalue, newvalue ) {


    for( var k = 0; k < this.AllList.length; ++k ) {
        if( oldvalue == this.AllList[k][field] ) {
          this.AllList[k][field] = newvalue ;
        }
    }
    return this.AllList;

    
}

checkBookMark(){

  console.log(this.AllList);

this.replaceByValue('title','Rabbana 1','Rabbana 13232')
console.log(this.AllList);

this.replaceByValue('type','Chocolate','only water')
console.log(this.AllList);

}

// for AutoPlay

// controlBack(){
  

// }

// controlForward(){


// }





}