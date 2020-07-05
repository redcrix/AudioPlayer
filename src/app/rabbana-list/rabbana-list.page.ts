

  
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

// import { CalPage } from './calender_Time';
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
      "do1": "Our Lord, Accept (this service) from us: For You are the All-Hearing, the All-knowing",
      "do2": "Rabbanaa taqabbal minnaa innaka antas Sameeaul ‘Aleem",
      "do3": "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ العَلِيمُ",
      "do4": "Mbuye Wathu, Tilandireni (ntchito yathuyi), Ndithudi, Inu ndinu Akumva; Odziwa",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua1.mp3"
    },
    {
      "title": "Rabbana 2",
      "do1": "Our Lord, and make us Muslims (in submission) to You and from our descendants a Muslim nation (in submission) to You. And show us our rites and accept our repentance; Indeed, You are The Accepting of repentance, The Most Merciful",
      "do2": "Rabbana wa-j'alna Muslimaini laka wa min Dhurriyatina 'Ummatan Muslimatan laka wa 'Arina Manasikana wa tub 'alaina 'innaka 'antat-Tawwabu-Raheem       ",
      "do3": "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَآ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ",
      "do4": "Mbuye Wathu, Tipangeni kukhala ogonjera Inu, pamodzinso ndi ana athu muwapangenso kukhala pfuko logonjera Inu. Ndipo tidziwitseni (njira) za mapemphero athu; ndipo tikhululukireni. Ndithudi, Inu ndinu wolandira kulapa Mochuluka; Wachisoni",
      "Info": "",
      "mark": true,
      "duasAudio": "Dua2.mp3"
    },
    {
      "title": "Rabbana 3",
      "do1": "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire",
      "do2": "Rabbanaaa atinaa fid-dunya hasanatan wa fil 'akhirati hasanatan waqinaa 'adhaabannaar",
      "do3": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      "do4": "Mbuye Wathu, Tipatseni (mtendere) padziko lapansi ndipo Mudzatipatsenso zabwino m'moyo winawo, ndikutitchinjiriza ku chilango chamoto",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua3.mp3"
    },
    {
      "title": "Rabbana 4",
      "do1": "Our Lord, bestow upon us patience and make our feet firm and give us victory over the disbelieving people",
      "do2": "Rabbanaaa afrigh '‘alaynaa sabran wa thabbit aqdamanaa wansurna 'alal-qawmil-kafirin",
      "do3": "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْراً وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى القَوْمِ الكَافِرِين",
      "do4": "Mbuye Wathu, titsanulireni chipiriro, ndipo limbikitsani mapazi anthu; ndipo tithangateni kwa anthu osakhulupirira",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua4.mp3"
    },
    {
      "title": "Rabbana 5",
      "do1": "Our Lord, do not impose blame upon us if we have forgotten or erred",
      "do2": "Rabbanaa la tu'akhidhnaa in-nasinaa aw akhta'naa",
      "do3": "رَبَّنَا لاَ تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
      "do4": "Mbuye Wathu, musatilange tikaiwala kapena tikalakwitsa",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua5.mp3"
    },
    {
      "title": "Rabbana 6",
      "do1": "Our Lord, and lay not upon us a burden like that which You laid upon those before us",
      "do2": "Rabbanaa wala tahmil ‘alaynaa isran kama hamaltahu 'alal-ladheena min qablinaa",
      "do3": "رَبَّنَا وَلاَ تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا",
      "do4": "Mbuye Wathu, ndipo musatisenzetse mtolo (wamalamulo) monga munawasenzetsera amene adalipo patsogolo pathu",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua6.mp3"
    },
    {
      "title": "Rabbana 7",
      "do1": "Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people",
      "do2": "Rabbanaa wala tuhammilnaa ma la t’aaqatalanaa bihi, wa'fuannaa waghfirlanaa warhamnaa anta mawlanaa fansurnaa 'alal-qawmil kafireen",
      "do3": "رَبَّنَا وَلاَ تُحَمِّلْنَا مَا لاَ طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلاَنَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِين",
      "do4": "Mbuye Wathu, ndipo musatisenzetse chimene sitingachite. Ndipo tifafanizireni, tikhululukireni machimo athu, ndiponso tichitireni chifundo. Inu Ndinu mtetezi Wathu. Choncho tinthangateni ku anthu osakhulupirira",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua7.mp3"
    },
    {
      "title": "Rabbana 8",
      "do1": "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are The Bestower",
      "do2": "Rabbanaa la tuzigh quloobanaa ba'da idh hadaitanaa wa hab lanaa milladunka rahmah innaka antal wahhab",
      "do3": "رَبَّنَا لاَ تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
      "do4": "Mbuye Wathu, musaikhotetse mitima yathu pambuyo potiongola. Tipatseni chifundo chochokera kwa Inu. Ndithudi, Inu Ndinu wopatsa kwambiri",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua8.mp3"
    },
    {
      "title": "Rabbana 9",
      "do1": "Those who say, Our Lord indeed we have believed so forgive us our sins and protect us from the punishment of the Fire",
      "do2": "Rabbanaa innana amanna faghfirlanaa  dhunuubana wa qinaa 'adhabannaar",
      "do3": "رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ",
      "do4": "Mbuye Wathu, Ndithudi ife takhulupirira; choncho tikhululukireni machimo athu ndikutipewetsa kuchilango chamoto",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua9.mp3"
    },
    {
      "title": "Rabbana 10",
      "do1": "Our Lord, we have believed in what You revealed and have followed the messenger, so register us among the witnesses (to truth)",
      "do2": "Rabbanaa amanna bimaa anzalta wattaba'nar-Rusula fak-tubnaa ma'ash-Shahideen",
      "do3": "رَبَّنَا آمَنَّا بِمَا أَنزَلَتْ وَاتَّبَعْنَا الرَّسُولَ فَاكْتُبْنَا مَعَ الشَّاهِدِينَ",
      "do4": "Mbuye Wathu, tazikhulupirira zimene mwavumbulutsa; ndipo tamtsata mtumikiyo, choncho tilembeni pamodzi ndi oikira umboniwo",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua10.mp3"
    },
    {
      "title": "Rabbana 11",
      "do1": "Our Lord, forgive us our sins and the excess (committed) in our affairs and plant firmly our feet and give us victory over the disbelieving people",
      "do2": "Rabbana-ghfir lana dhunuubana wa israfanaa fi amrinaa wa thabbit aqdamanaa wansurnaa 'alal qawmil kafireen",
      "do3": "ربَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
      "do4": "Mbuye Wathu, tikhululukireni machimo athu ndi kupyola malire kwathu m'zinthu zathu; ndipo limbikitsani mapazi anthu (panjira Yanu) ndipo tithandizeni ku anthu osakhulupirira",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua11.mp3"
    },
    {
      "title": "Rabbana 12",
      "do1": "Our Lord, and grant us what You promised us through Your messengers and do not disgrace us on the Day of Resurrection. Indeed, You do not fail in (Your) promise",
      "do2": "Rabbanaa wa 'atinaa ma wa'adtanaa 'ala rusulika wa la tukhzinaa yawmal-Qiyaamati innaka la tukhliful mi'aad",
      "do3": "رَبَّنَا وَآتِنَا مَا وَعَدتَّنَا عَلَى رُسُلِكَ وَلاَ تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لاَ تُخْلِفُ الْمِيعَاد",
      "do4": "Mbuye Wathu, tipatseni zimene mudatilonjeza kupyolera mwa atumuki Anu ndipo musazatisambule tsiku lachimaliziro; ndithudi, Inu simuswa lonjezo",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua12.mp3"
    },
    {
      "title": "Rabbana 13",
      "do1": "Our Lord, we have believed; so register us among the witnesses",
      "do2": "Rabbanaa aamana faktubnaa ma' ash-shahideen",
      "do3": "رَبَّنَا آمَنَّا فَاكْتُبْنَا مَعَ الشَّاهِدِين",
      "do4": "Mbuye Wathu, takhulupirira; choncho tilembeni pamodzi ndi oikira umboni (choonadi)",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua13.mp3"
    },
    {
      "title": "Rabbana 14",
      "do1": "Our Lord, we have wronged ourselves and if You do not forgive us and have mercy upon us, we will surely be among the losers",
      "do2": "Rabbanaa dhalamnaa anfusanaa wa illam taghfirlanaa wa tarhamnaa lanakunan minal-khasireen",
      "do3": "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
      "do4": "Mbuye Wathu, Tadzichitira tokha zoipa; ngati simutikhululukira ndi kuhita nafe chifundo ndiye kuti tikhala mwa otaika",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua14.mp3"
    },
    {
      "title": "Rabbana 15",
      "do1": "Our Lord, do not place us with the wrongdoing people",
      "do2": "Rabbanaa la taj'alnaa ma'al qawwmi-dhalimeen",
      "do3": "رَبَّنَا لاَ تَجْعَلْنَا مَعَ الْقَوْمِ الظَّالِمِينَ",
      "do4": "Mbuye Wathu, musatiike pamodzi ndi anthu ochita zoipa (Tikhululukireni zolakwa zathu. Tilowetseni ku Jannah)",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua15.mp3"
    },
    {
      "title": "Rabbana 16",
      "do1": "Our Lord, decide between us and our people in truth, and You are the best of those who give decision",
      "do2": "Rabbanaaf-tah baynanaa wa bayna qawminaa bil haqqi wa anta Khairul Fatiheen",
      "do3": "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ",
      "do4": "Mbuye Wathu, weruzani mwachoonadi pakati pathu ndi pakati pa anthu athu; Inu Ngabwino poweruza kuposa oweruza",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua16.mp3"
    },
    {
      "title": "Rabbana 17",
      "do1": "Our Lord, pour upon us patience and let us die as Muslims (in submission to You)",
      "do2": "Rabbanaa afrigh '‘alaynaa sabrawwa-tawaffana Muslimeen",
      "do3": "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
      "do4": "Mbuye Wathu, titsanulireni chipiriro; ndipo tipatseni imfa uku tili Asilamu (ogonjera Inu)",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua17.mp3"
    },
    {
      "title": "Rabbana 18",
      "do1": "Our Lord, make us not (objects of) trial for the wrongdoing people; And save us by Your mercy from the disbelieving people",
      "do2": "Rabbanaa la taj'alnaa fitnatal lil-qawmidh-Dhalimeen; wa najjinaa bi-Rahmatika minal qawmil kafireen",
      "do3": "رَبَّنَا لاَ تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ الظَّالِمِينَ ; وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ",
      "do4": "Mbuye Wathu, musatichite kukhala onzunzidwa ndi anthu oipa; Ndipo tipulumutseni ku anthu osakhulupirira",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua18.mp3"
    },
    {
      "title": "Rabbana 19",
      "do1": "My Lord, make me an establisher of prayer, and (many) from my descendants; Our Lord, and accept my supplication",
      "do2": "Rabbij 'alnee muqimas-salati wa min thurriyatee, Rabbanaa wa taqabbal Du'a",
      "do3": "رَبِّ ٱجْعَلْنِى مُقِيمَ ٱلصَّلَوٰةِ وَمِن ذُرِّيَّتِى, رَبَّنَا وَتَقَبَّلْ دُعَا",
      "do4": "Mbuye Wanga, ndichiteni kukhala wopemphera swala pamodzi ndi mbumba yanga; Mbuye Wathu, landirani zopempha zanga",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua19.mp3"
    },
    {
      "title": "Rabbana 20",
      "do1": "Our Lord, forgive me and my parents and the believers the Day the account is established",
      "do2": "Rabbanaaghfirlee wa li wallidayya wa lil mu'mineena yawma yaqumul hisaab",
      "do3": "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
      "do4": "Mbuye Wathu, ndikhululukireni ine ndi makolo anga ndi amene akhulupirira, (makamaka) patsiku la chiwerengero (Kiyama)",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua20.mp3"
    },
    {
      "title": "Rabbana 21",
      "do1": "My Lord, have mercy upon them (my parents) as they brought me up [when I was] small",
      "do2": "Rabbir hamhumaa kamaa rabbayaanee sagheeraa",
      "do3": "ارَّبِّارْحَمْهُمَاكَمَارَبَّيَانِيصَغِيرً",
      "do4": "Mbuye Wanga, achitireni chisoni (makolo anga)  monga momwe ankandilerera ku ubwana",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua21.mp3"
    },
    {
      "title": "Rabbana 22",
      "do1": "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance",
      "do2": "Rabbanaa 'atinaa mil-ladunka Rahmataw-wa hayyi' lana min amrinaa rashadaa",
      "do3": "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
      "do4": "Mbuye Wathu, tipatseni chifundo chochokera kwa Inu, ndipo tikonzereni chiongoko m'zochita zathu",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua22.mp3"
    },
    {
      "title": "Rabbana 23",
      "do1": "My Lord, increase me in knowledge",
      "do2": "Rabbi zidnee 'ilmaa",
      "do3": "رَّبِّ زِدْنِي عِلْمًا",
      "do4": "Mbuye wanga! Ndionjezereni nzeru",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua23.mp3"
    },
    {
      "title": "Rabbana 24",
      "do1": "Our Lord, we have believed, so forgive us and have mercy upon us,and You are the best of the mercifu",
      "do2": "Rabbanaa amannaa faghfirlanaa warhamnaa wa anta khairur Rahimeen",
      "do3": "رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ إِنَّ عَذَابَهَا كَانَ غَرَامًا إِنَّهَا سَاءتْ مُسْتَقَرًّا وَمُقَامًا",
      "do4": "Mbuye Wathu, tichotsereni chilango cha Jahannama; Ndithu chilango chake nchosasiyana nacho. Ndithu iyo ndi malo woipa; ndiponso pokhala poipa ",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua24.mp3"
    },
    {
      "title": "Rabbana 25",
      "do1": "Our Lord, avert from us the punishment of Hell; Indeed its punishment is ever adhering. Indeed it is evil as a settlement and residence",
      "do2": " Rabbanaaa innaka ta'lamu maa nukhfee wa maa nu'lin; wa maa yakhfaa 'alal laahi min shai'in fil ardi wa",
      "do3": "رَبَّنَا إِنَّكَ تَعْلَمُ مَا نُخْفِي وَمَا نُعْلِنُ وَمَا يَخْفَى عَلَى اللّهِ مِن شَيْءٍ فَي الأَرْضِ وَلاَ فِي السَّمَاء",
      "do4": "Mbuye Wathu, tichotsereni chilango cha Jahannama; Ndithu chilango chake nchosasiyana nacho. Ndithu iyo ndi malo woipa; ndiponso pokhala poipa",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua25.mp3"
    },
    {
      "title": "Rabbana 26",
      "do1": "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous",
      "do2": "Rabbanaa hablanaa min azwaajinaa wadhurriy-yatinaaqurrata 'a'ayuni wa-j'alnaa lil-muttaqeena Imaamaa ",
      "do3": "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
      "Info": "Mbuye Wathu, tipatseni mwa akazi athu ndi ana athu chotonthoza maso; Ndipo tichiteni kukhala atsogoleri a oopa Mulungu",
      "mark": false,
      "duasAudio": "Dua26.mp3"
    },
    {
      "title": "Rabbana 27",
      "do1": "Our Lord, You have encompassed all things in mercy and knowledge, so forgive those who have repented and followed Your way and protect them from the punishment of Hellfire",
      "do2": "Rabbanaa wasi'ta kulla sha'y Rrahmatan wa 'ilman faghfir lilladheena taaboo wattaba'oo sabeelaka waqihim 'adhaabal-Jaheem",
      "do3": "رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَّحْمَةً وَعِلْمًا فَاغْفِرْ لِلَّذِينَ تَابُوا وَاتَّبَعُوا سَبِيلَكَ وَقِهِمْ عَذَابَ الْجَحِيمِ",
      "do4": "Mbuye Wathu, Chifundo ndi kudziwa Kwanu kwakwanira pa chinthu chilichonse; khululukirani amene alapa ndi kutsatira njira Yanu; ndipo apewetseni ku chilango cha Jahena",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua27.mp3"
    },
    {
      "title": "Rabbana 28",
      "do1": "Our Lord, and admit them to gardens of perpetual residence which You have promised them and whoever was righteous among their fathers, their spouses and their offspring. Indeed, it is You who is the Exalted in Might, the Wise And protect them from the evil consequences [of their deeds]. And he whom You protect from evil consequences that Day - You will have given him mercy. And that is the great attainment",
      "do2": "Rabbanaa wa adhkhilhum Jannaati 'adninil-lati wa'attahum wa man salaha min aabaa'ihim wa azwaajihim wa dhuriyyaatihim innaka antal 'Azeezul-Hakim Waqihimus-saiyi'at wa man taqis-saiyi'ati yawma'idhin faqad rahimatahu wa dhaalika huwal fawzul-'adheem",
      "do3": "رَبَّنَا وَأَدْخِلْهُمْ جَنَّاتِ عَدْنٍ الَّتِي وَعَدتَّهُم وَمَن صَلَحَ مِنْ آبَائِهِمْ وَأَزْوَاجِهِمْ وَذُرِّيَّاتِهِمْ إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ وَقِهِمُ السَّيِّئَاتِ وَمَن تَقِ السَّيِّئَاتِ يَوْمَئِذٍ فَقَدْ رَحِمْتَهُ وَذَلِكَ هُوَ الْفَوْزُ الْعَظِيمُ",
      "do4": "Mbuye Wathu, ndipo alowetseni ku minda ya muyaya imene mudawalonjeza; ndi amene adachita zabwino mwa atate awo ndi akazi awo ndi ana awo. Ndithu, inu ndi Amphamvu Zoposa; Anzeru Zakuya Ndipo apewetseni ku zoipa; tsono amene mudzampewetsa ku zoipa tsiku limenelo, ndiye kuti mwamchitira chifundo. Ndipo kumeneko ndiko kupambana kwakukulu ",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua28.mp3"
    },
    {
      "title": "Rabbana 29",
      "do1": "Our Lord, forgive us and our brothers who preceded us in faith and put not in our hearts (any) resentment toward those who have believed; Our Lord, indeed You are Kind and Merciful ",
      "do2": "Rabbanaa-ghfirlanaa wa li 'ikhwaaninaa-alladheena sabaqoonaa bil eemaani wa laa taj'al fi quloobinaa ghillallilladheena aamanoo Rabbanaa innaka Ra'ufur Rahim ",
      "do3": "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِّلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَّحِيمٌ",
      "do4": "Mbuye Wathu, Tikhululukireni ndi anzathu amene adatitsogolera pa chikhulupiriro, ndipo musaike mmitima mwathu njiru ndi chidani kwa amene adakhulupirira; Mbuye Wathu, Inu Ndinu Wodekha Wachisoni Chosatha ",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua29.mp3"
    },
    {
      "title": "Rabbana 30",
      "do1": "Our Lord, upon You we have relied; and to You we have returned, and to You is the destination",
      "do2": "Rabbanaa 'alayka tawakkalnaa wa-ilayka anabnaa wa-ilaikal maseer",
      "do3": "رَّبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ",
      "do4": "Mbuye Wathu, Kwa Inu tatsamira; Ndipo kwa Inu tatembenukira ndiponso kobwerera Nkwa Inu ",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua30.mp3"
    },
  
    {
      "title": "Rabbana 31",
      "do1": "Our Lord, make us not (objects of) torment for the disbelievers and forgive us, our Lord. Indeed, it is You who is The Exalted in Might, The Wise",
      "do2": "Rabbanaa la taj'alnaa fitnatallilladheena kafaroo waghfirlanaa Rabbanaa innaka antal 'Azeezul-Hakim",
      "do3": "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
      "do4": "Mbuye Wathu, Musatichite kukhala mayeso kwa amene sadakhulupirire, tikhululukireni Mbuye Wathu; Ndithu Inu Ndinu Amphamvu Zopambana Ndiponso Anzeru Zakuya",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua31.mp3"
    },
  
    {
      "title": "Rabbana 32",
      "do1": "Our Lord, perfect for us our light and forgive us; Indeed, You are over all things competent",
      "do2": "Rabbanaa atmim lanaa nooranaa waighfirlanaa innaka 'ala kulli shay-in qadeer",
      "do3": "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
      "do4": "Mbuye Wathu, Tikwanitsireni dangalira lathu (Mpaka likatifikitse ku munda wa Mtendere); ndiponso tikhululukireni Ndithu Inu ndi Okhoza chilichonse",
      "Info": "",
      "mark": false,
      "duasAudio": "Dua32.mp3"
    }
  
  
  ];
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
      this.ShowPlay = false; 
        this.data = '';
      if(this.data){

            console.log('=========================='+this.data);
       
          }

          if(this.data){
            
            console.log('On Page Load from Last=======');
   
      }

    
    
   }

async  ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.Check({'title':params.current});
        this.recentlyViewed({'title':params.current});
      });
      

  
      this.curr_playing_file.stop();


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
   let curr =  this.curr_playing_file.pause();
   console.log(curr);
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

    console.log(data);
    
   this.platform.ready().then(() =>
   {
    
      this.socialSharing.share(data.do3+ "\n" +data.do2+ "\n" +data.do1, + "\n" +data.do3,  +"\n"+data.title, ).then(() => {
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
