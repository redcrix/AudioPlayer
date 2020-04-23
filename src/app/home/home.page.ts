import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { RemoteServiceService } from './../remote-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { AnimationService, AnimationBuilder } from 'css-animator';
import { ThemeSwitcherService } from '../../app/theme-switcher.service';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('myElement', { static: false }) myElem;
  Book_M: any;
  private animator: AnimationBuilder;
  items =

    [



      {
        "title": "Dua No. 1",
        "do1": "Our Lord! Accept (this service) from us: For Thou art the All-Hearing, the All-knowing                    ",
        "do2": "Rabbana taqabbal minna innaka antas Sameeaul Aleem",
        "do3": "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ العَلِيمُ",
        "do4": "Mbuye Wathu, Tilandireni (ntchito yathuyi), Ndithudi, Inu ndinu Akumva; Odziwa",
        "Info": "Surah al-Baqarah v127",
        "mark": false,
        "duasAudio": "Dua1.mp3"
      },
      {
        "title": "Dua No. 2",
        "do1": "Our Lord, and make us Muslims (in submission) to You and from our descendants a Muslim nation (in submission) to You. And show us our rites and accept our repentance; Indeed, You are The Accepting of repentance, The Most Merciful        ",
        "do2": "Rabbana wa-j'alna Muslimaini laka wa min Dhurriyatina 'Ummatan Muslimatan laka wa 'Arina Manasikana wa tub 'alaina 'innaka 'antat-Tawwabu-Raheem       ",
        "do3": "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَآ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ",
        "do4": "Mbuye Wathu, Tipangeni kukhala ogonjera Inu, pamodzinso ndi ana athu muwapangenso kukhala pfuko logonjera Inu. Ndipo tidziwitseni (njira) za mapemphero athu; ndipo tikhululukireni. Ndithudi, Inu ndinu wolandira kulapa Mochuluka; Wachisoni",
        "Info": "Surah al-Baqarah v128 ",
        "mark": true,
        "duasAudio": "Dua2.mp3"
      },
      {
        "title": "Dua No. 3",
        "do1": "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire ",
        "do2": "Rabbana atina fid-dunya hasanatan wa fil Aakhirati hasanatan waqina 'adhaban-nar    ",
        "do3": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ    ",
        "do4": "Mbuye Wathu, Tipatseni (mtendere) padziko lapansi ndipo Mudzatipatsenso zabwino m'moyo winawo, ndikutitchinjiriza ku chilango chamoto",
        "Info": "Surah al-Baqarah v201",
        "mark": false,
        "duasAudio": "Dua3.mp3"
      },
      {
        "title": "Dua No. 4",
        "do1": "Our Lord, bestow upon us patience and make our feet firm and give us victory over the disbelieving people",
        "do2": "Rabbana afrigh 'alaina sabran wa thabbit aqdamana wansurna 'alal-qawmil-kafirin    ",
        "do3": "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْراً وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى القَوْمِ الكَافِرِينَ    ",
        "do4": "Mbuye Wathu, titsanulireni chipiriro, ndipo limbikitsani mapazi anthu ndipo tithangateni kwa anthu osakhulupirira",
        "Info": "Surah al-Baqarah v250",
        "mark": false,
        "duasAudio": "Dua4.mp3"
      },
      {
        "title": "Dua No. 5",
        "do1": "Our Lord, do not impose blame upon us if we have forgotten or erred",
        "do2": "Rabbana la tu'akhidhna in-nasina aw akhta'na",
        "do3": "رَبَّنَا لاَ تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
        "do4": "Mbuye Wathu, musatilange tikaiwala kapena tikalakwitsa ",
        "Info": "Surah al-Baqarah v286",
        "mark": false,
        "duasAudio": "Dua5.mp3"
      },
      {
        "title": "Dua No. 6",
        "do1": "Our Lord, and lay not upon us a burden like that which You laid upon those before us"      ,
        "do2": "Rabbana wala tahmil alaina isran kama hamaltahu 'alal-ladheena min qablina",
        "do3": "رَبَّنَا وَلاَ تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا",
        "do4": "Mbuye Wathu, ndipo musatisenzetse mtolo (wamalamulo) monga munawasenzetsera amene adalipo patsogolo pathu",
        "Info": "Surah al-Baqarah v286",
        "mark": false,
        "duasAudio": "Dua6.mp3"
      },
      {
        "title": "Dua No. 7",
        "do1": "Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people ",
        "do2": "Rabbana wala tuhammilna ma la taqata lana bihi wa'fu anna waghfir lana wairhamna anta mawlana fansurna 'alal-qawmil kafireen    ",
        "do3": "رَبَّنَا وَلاَ تُحَمِّلْنَا مَا لاَ طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلاَنَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ    ",
        "do4": "Mbuye Wathu, ndipo musatisenzetse chimene sitingachite. Ndipo tifafanizireni, tikhululukireni machimo athu, ndiponso tichitireni chifundo. Inu Ndinu mtetezi Wathu. Choncho tinthangateni ku anthu osakhulupirira",
        "Info": "Surah al-Baqarah v286",
        "mark": false,
        "duasAudio": "Dua7.mp3"
      },
      {
        "title": "Dua No. 8",
        "do1": "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are The Bestower   ",
        "do2": "Rabbana la tuzigh quloobana ba'da idh hadaitana wa hab lana milladunka rahmah innaka antal Wahhab ",
        "do3": "رَبَّنَا لاَ تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
        "do4": " Mbuye Wathu, musaikhotetse mitima yathu pambuyo potiongola. Tipatseni chifundo chochokera kwa Inu. Ndithudi, Inu Ndinu wopatsa kwambiri ",
        "Info": "Surah Ali ‘Imraan v8",
        "mark": false,
        "duasAudio": "Dua8.mp3"
      },
      // {
      //   "title": "Dua No. 9",
      //   "do1": "Those who say, Our Lord, indeed we have believed, so forgive us our sins and protect us from the punishment of the Fire  ",
      //   "do2": "Rabbana innaka jami'unnasi li-Yawmil la raiba fi innallaha la yukhliful mi'aad ",
      //   "do3": "رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لاَّ رَيْبَ فِيهِ إِنَّ اللّهَ لاَ يُخْلِفُ الْمِيعَادَ",
      //   "do4": "Mbuye Wathu, Ndithudi ife takhulupirira; choncho tikhululukireni machimo athu ndikutipewetsa kuchilango chamoto",
      //   "Info": "Surah Ali ‘Imraan v16",
      //   "mark": false,
      //   "duasAudio": "Dua9.mp3"
      // },
      {
        "title": "Dua No. 10",
        "do1": "Those who say, Our Lord, indeed we have believed, so forgive us our sins and protect us from the punishment of the Fire",
        "do2": " Rabbana innana amanna faghfir lana dhunuubana wa qinna 'adhaban-Naar",
        "do3": "رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ",
        "do4": "Mbuye Wathu, tazikhulupirira zimene mwavumbulutsa; ndipo tamtsata mtumikiyo, choncho tilembeni pamodzi ndi oikira umboniwo",
        "Info": "Surah Ali ‘Imraan v16 ",
        "mark": false,
        "duasAudio": "Dua10.mp3"
      },
      {
        "title": "Dua No. 10",
        "do1": "Our Lord, we have believed in what You revealed and have followed the messenger, so register us among the witnesses (to truth)",
        "do2": "Rabbana amanna bima anzalta wattaba 'nar-Rusula fak-tubna ma'ash-Shahideen ",
        "do3": "رَبَّنَآ ءَامَنَّا بِمَآ أَنزَلْتَ وَٱتَّبَعْنَا ٱلرَّسُولَ فَٱكْتُبْنَا مَعَ ٱلشَّٰهِدِينَ",
        "do4": "Mbuye Wathu, tikhululukireni machimo athu ndi kupyola malire kwathu m'zinthu zathu; ndipo limbikitsani mapazi anthu (panjira Yanu) ndipo tithandizeni ku anthu osakhulupirira",
        "Info": "Surah Ali ‘Imraan v53",
        "mark": false,
        "duasAudio": "Dua11.mp3"
      },
      {
        "title": "Dua No. 12",
        "do1": "Our Lord, forgive us our sins and the excess (committed) in our affairs and plant firmly our feet and give us victory over the disbelieving people",
        "do2": " Rabbana-ghfir lana dhunuubana wa israfana fi amrina wa thabbit aqdamana wansurna 'alal qawmil kafireen    ",
        "do3": "ربَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَِ",
        "do4": "Mbuye Wathu, tikhululukireni machimo athu ndi kupyola malire kwathu m'zinthu zathu; ndipo limbikitsani mapazi anthu (panjira Yanu) ndipo tithandizeni ku anthu osakhulupirira ",
        "Info": "Surah Ali ‘Imraan v147",
        "mark": false,
        "duasAudio": "Dua12.mp3"
      },
      {
        "title": "Dua No. 13",
        "do1": "Our Lord, and grant us what You promised us through Your messengers and do not disgrace us on the Day of Resurrection. Indeed, You do not fail in (Your) promise",
        "do2": "Rabbanaa wa 'atinaa ma wa'adtanaa 'ala rusulika wa la tukhzinaa yawmal-Qiyaamati innaka la tukhliful mi'aad",
        "do3": "رَبَّنَا وَآتِنَا مَا وَعَدتَّنَا عَلَى رُسُلِكَ وَلاَ تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لاَ تُخْلِفُ الْمِيعَاد",
        "do4": "Mbuye Wathu, tipatseni zimene mudatilonjeza kupyolera mwa atumuki Anu ndipo musazatisambule tsiku lachimaliziro; ndithudi, Inu simuswa lonjezo ",
        "Info": "Surah Ali ‘Imraan v194",
        "mark": false,
        "duasAudio": "Dua13.mp3"
      },
      {
        "title": "Dua No. 14",
        "do1": "Our Lord, we have wronged ourselves and if You do not forgive us and have mercy upon us, we will surely be among the losers",
        "do2": "Rabbanaa dhalamnaa anfusanaa wa illam taghfirlanaa wa tarhamnaa lanakunan minal-khasireen ",
        "do3": "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ",
        "do4": "Mbuye Wathu, Tadzichitira tokha zoipa; ngati simutikhululukira ndi kuchita nafe chifundo ndiye kuti tikhala mwa otaika",
        "Info": "Surah Al-A'raf v23",
        "mark": false,
        "duasAudio": "Dua14.mp3"
      },
      {
        "title": "Dua No. 15",
        "do1": "Our Lord, do not place us with the wrongdoing people",
        "do2": "Rabbanaa la taj'alnaa ma'al qawwmi-dhalimeen ",
        "do3": "رَبَّنَا لاَ تَجْعَلْنَا مَعَ الْقَوْمِ الظَّالِمِينَ",
        "do4": "Mbuye Wathu, musatiike pamodzi ndi anthu ochita zoipa  (Tikhululukireni zolakwa zathu. Tilowetseni ku Jannah) ",
        "Info": "Surah Al-A’raf v47",
        "mark": false,
        "duasAudio": "Dua15.mp3"
      },
      {
        "title": "Dua No. 16",
        "do1": "Our Lord, decide between us and our people in truth, and You are the best of those who give decision",
        "do2": " Rabbanaaf-tah baynanaa wa bayna qawminaa bil haqqi wa anta Khairul Fatiheen",
        "do3": "رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الأبْرَارِ",
        "do4": "Mbuye Wathu, weruzani mwachoonadi pakati pathu ndi pakati pa anthu athu Inu Ngabwino poweruza kuposa oweruza ",
        "Info": "Surah Al-A’raf v89",
        "mark": false,
        "duasAudio": "Dua16.mp3"
      },
      {
        "title": "Dua No. 17",
        "do1": "Our Lord, pour upon us patience and let us die as Muslims (in submission to You)",
        "do2": "Rabbanaa afrigh '‘alaynaa sabrawwa-tawaffana Muslimeen",
        "do3"  : "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ ",
        "do4": "Mbuye Wathu, titsanulireni chipiriro; ndipo tipatseni imfa uku tili Asilamu (ogonjera Inu)",
        "Info": "Surah Al-A’raf v126",
        "mark": false,
        "duasAudio": "Dua17.mp3"
      },
      {
        "title": "Dua No. 18",
        "do1": "Our Lord, make us not (objects of) trial for the wrongdoing people And save us by Your mercy from the disbelieving people",
        "do2": "Rabbanaa la taj'alnaa fitnatal lil-qawmidh-Dhalimeen wa najjinaa bi-Rahmatika minal qawmil kafireen ",
        "do3": "رَبَّنَا آمَنَّا فَاكْتُبْنَا مَعَ الشَّاهِدِينَ",
        "do4": "Mbuye Wathu, musatichite kukhala onzunzidwa ndi anthu oipa; Ndipo tipulumutseni ku anthu osakhulupirira ",
        "Info": "Surah Yunus v86 - 86",
        "mark": false,
        "duasAudio": "Dua18.mp3"
      },
      {
        "title": "Dua No. 19",
        "do1": "My Lord, make me an establisher of prayer, and (many) from my descendants; Our Lord, and accept my supplication",
        "do2": "Rabbij 'alnee muqimas-salati wa min thurriyatee, Rabbanaa wa taqabbal Du'a",
        "do3": "رَبَّنَا أَنزِلْ عَلَيْنَا مَآئِدَةً مِّنَ السَّمَاء تَكُونُ لَنَا عِيداً لِّأَوَّلِنَا وَآخِرِنَا وَآيَةً مِّنكَ وَارْزُقْنَا وَأَنتَ خَيْرُ الرَّازِقِينَ",
        "do4": "Mbuye Wanga, ndichiteni kukhala wopemphera swala pamodzi ndi mbumba yanga; Mbuye Wathu, landirani zopempha zanga",
        "Info": "Surah Ibrahim v40",
        "mark": false,
        "duasAudio": "Dua19.mp3"
      },
      {
        "title": "Dua No. 20",
        "do1": "Our Lord, forgive me and my parents and the believers the Day the account is established",
        "do2": " Rabbanaaghfirlee wa li wallidayya wa lil mu'mineena yawma yaqumul hisaab ",
        "do3": "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ        ",
        "do4": "Mbuye Wathu, ndikhululukireni ine ndi makolo anga ndi amene akhulupirira, (makamaka) patsiku la chiwerengero (Kiyama)",
        "Info": "Surah Ibrahim v41",
        "mark": false,
        "duasAudio": "Dua20.mp3"
      },
      {
        "title": "Dua No. 21",
        "do1": "My Lord, have mercy upon them (my parents) as they brought me up [when I was] small",
        "do2": "Rabbir hamhumaa kamaa rabbayaanee sagheeraa  ",
        "do3": "رَبَّنَا لاَ تَجْعَلْنَا مَعَ الْقَوْمِ الظَّالِمِينَ",
        "do4": "Mbuye Wanga, achitireni chisoni (makolo anga)  monga momwe ankandilerera ku ubwana",
        "Info": "Surah Al-Isra v24",
        "mark": false,
        "duasAudio": "Dua21.mp3"
      },
      {
        "title": "Dua No. 22",
        "do1": "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance",
        "do2": " Rabbanaa 'atinaa mil-ladunka Rahmataw-wa hayyi' lana min amrinaa rashadaa  ",
        "do3": "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
        "do4": "Mbuye Wathu, tipatseni chifundo chochokera kwa Inu, ndipo tikonzereni chiongoko m'zochita zathu",
        "Info": "Surah Al-Kahf v10",
        "mark": false,
        "duasAudio": "Dua22.mp3"
      },
      {
        "title": "Dua No. 23",
        "do1": "My Lord, increase me in knowledge",
        "do2": "Rabbi zidnee 'ilmaa ",
        "do3":  "رَّبِّ زِدْنِي عِلْمًا" ,
        "do4": "Mbuye wanga! Ndionjezereni nzeru",
        "Info": "Surah Taha v114",
        "mark": false,
        "duasAudio": "Dua23.mp3"
      },
      {
        "title": "Dua No. 24",
        "do1": "Our Lord, we have believed, so forgive us and have mercy upon us,and You are the best of the merciful",
        "do2": "Rabbanaa amannaa faghfirlanaa warhamnaa wa anta khairur Rahimeen   ",
        "do3": "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنتَ خَيْرُ الرَّاحِمِينَ",
        "do4": "Mbuye Wathu, Takhulupirira; choncho tikhululukireni Ndikutichitira chifundo; ndipo inu Ngabwino kwambiri kuposa (ena onse) Ochita chifundo",
        "Info": "Surah Al-Mu’minun v109",
        "mark": false,
        "duasAudio": "Dua24.mp3"
      },
      {
        "title": "Dua No. 25",
        "do1": "Our Lord, avert from us the punishment of Hell; Indeed its punishment is ever adhering. Indeed it is evil as a settlement and residence",
        "do2": " Rabbanaas-rif 'anna 'adhaba jahannama inna 'adhabahaa kaana gharamaa Innahaa saa'at musta-qarranw wa muqama",
        "do3": "رَبَّنَا إِنَّكَ تَعْلَمُ مَا نُخْفِي وَمَا نُعْلِنُ وَمَا يَخْفَى عَلَى اللّهِ مِن شَيْءٍ فَي الأَرْضِ وَلاَ فِي السَّمَاء",
        "do4": "Mbuye Wathu, tichotsereni chilango cha Jahannama; Ndithu chilango chake nchosasiyana nacho. Ndithu iyo ndi malo woipa; ndiponso pokhala poipa",
        "Info": "Surah Al-Furqan v65-66",
        "mark": false,
        "duasAudio": "Dua25.mp3"
      },
      {
        "title": "Dua No. 26",
        "do1": "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous",
        "do2": " Rabbanaa hablanaa min azwaajinaa wadhurriy-yatinaa qurrata 'a'ayuni wa-j'alnaa lil-muttaqeena Imaamaa",
        "do3": "رَبَّنَا وَتَقَبَّلْ دُعَاء",
        "do4": "Mbuye Wathu, tipatseni mwa akazi athu ndi ana athu chotonthoza maso; Ndipo tichiteni kukhala atsogoleri a oopa Mulungu",
        "Info" : "Surah Al-Furqan v74",
        "mark": false,
        "duasAudio": "Dua26.mp3"
      },
      {
        "title": "Dua No. 27",
        "do1": "Our Lord, You have encompassed all things in mercy and knowledge, so forgive those who have repented and followed Your way and protect them from the punishment of Hellfire",
        "do2": "Rabbanaa wasi'ta kulla sha'y Rrahmatan wa 'ilman faghfir lilladheena taaboo wattaba'oo sabeelaka waqihim 'adhaabal-Jaheem ",
        "do3": "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
        "do4": "Mbuye Wathu, Chifundo ndi kudziwa Kwanu kwakwanira pa chinthu chilichonse; khululukirani amene alapa ndi kutsatira njira Yanu; ndipo apewetseni ku chilango cha Jahena",
        "Info": "Surah Ghaafir v7",
        "mark": false,
        "duasAudio": "Dua27.mp3"
      },
      {
        "title": "Dua No. 28",
        "do1": "Our Lord, and admit them to gardens of perpetual residence which You have promised them and whoever was righteous among their fathers, their spouses and their offspring. Indeed, it is You who is the Exalted in Might, the Wise And protect them from the evil consequences [of their deeds]. And he whom You protect from evil consequences that Day - You will have given him mercy. And that is the great attainment",
       "do2" : "Rabbanaa wa adhkhilhum Jannaati 'adninil-lati wa'attahum wa man salaha min aabaa'ihim wa azwaajihim wa dhuriyyaatihim innaka antal 'Azeezul-Hakim Waqihimus-saiyi'at wa man taqis-saiyi'ati yawma'idhin faqad rahimatahu wa dhaalika huwal fawzul-'adheem",
        "do3": "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
        "do4": "Mbuye Wathu, ndipo alowetseni ku minda ya muyaya imene mudawalonjeza; ndi amene adachita zabwino mwa atate awo ndi akazi awo ndi ana awo. Ndithu, inu ndi Amphamvu Zoposa; Anzeru Zakuya Ndipo apewetseni ku zoipa; tsono amene mudzampewetsa ku zoipa tsiku limenelo, ndiye kuti mwamchitira chifundo. Ndipo kumeneko ndiko kupambana kwakukulu ",
        "Info": "Surah Ghaafir v8 - 9",
        "mark": false,
        "duasAudio": "Dua28.mp3"
      },
      {
        "title": "Dua No. 29",
        "do1": "Our Lord, forgive us and our brothers who preceded us in faith and put not in our hearts (any) resentment toward those who have believed; Our Lord, indeed You are Kind and Merciful",
        "do2": "Rabbanaa-ghfirlanaa wa li 'ikhwaaninaa-alladheena sabaqoonaa bil eemaani wa laa taj'al fi quloobinaa ghillallilladheena aamanoo Rabbanaa innaka Ra'ufur Rahim",
        "do3": "رَبَّنَا إِنَّنَا نَخَافُ أَن يَفْرُطَ عَلَيْنَا أَوْ أَن يَطْغَى",
        "do4": "Mbuye Wathu, Tikhululukireni ndi anzathu amene adatitsogolera pa chikhulupiriro, ndipo musaike mmitima mwathu njiru ndi chidani kwa amene adakhulupirira; Mbuye Wathu, Inu Ndinu Wodekha Wachisoni Chosatha",
        "Info": "Surah Al-Hashr v10",
        "mark": false,
        "duasAudio": "Dua29.mp3"
      },
      {
        "title": "Dua No. 30",
        "do1": "Our Lord, upon You we have relied; and to You we have returned, and to You is the destination",
        "do2": "Rabbanaa 'alayka tawakkalnaa wa-ilayka anabnaa wa-ilaikal maseer",
        "do3": "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنتَ خَيْرُ الرَّاحِمِينَ",
        "do4": "Mbuye Wathu, Kwa Inu tatsamira; Ndipo kwa Inu tatembenukira ndiponso kobwerera Nkwa Inu",
        "Info": "Surah Al-Mumtahinah v4",
        "mark": false,
        "duasAudio": "Dua30.mp3"
      },

      {
        "title": "Dua No. 31",
        "do1": "Our Lord, make us not (objects of) torment for the disbelievers and forgive us, our Lord. Indeed, it is You who is The Exalted in Might, The Wise",
        "do2": "Rabbanaa la taj'alnaa fitnatallilladheena kafaroo waghfirlanaa Rabbanaa innaka antal 'Azeezul-Hakim",
        "do3": "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
        "do4": "Mbuye Wathu, Musatichite kukhala mayeso kwa amene sadakhulupirire, tikhululukireni Mbuye Wathu Ndithu Inu Ndinu Amphamvu Zopambana Ndiponso Anzeru Zakuya",
        "Info": "Surah Al-Mumtahinah v5",
        "mark": false,
        "duasAudio": "Dua31.mp3"
      },

      {
        "title": "Dua No. 32",
        "do1": "Our Lord, perfect for us our light and forgive us Indeed, You are over all things competent",
        "do2": "Rabbanaa atmim lanaa nooranaa waighfirlanaa innaka 'ala kulli shay-in qadeer",
        "do3": "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        "do4": "Mbuye Wathu, Tikwanitsireni dangalira lathu (Mpaka likatifikitse ku munda wa Mtendere); ndiponso tikhululukireni Ndithu Inu ndi Okhoza chilichonse",
        "Info": "Surah At-Tahreem v8",
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
    public themeSwitcher: ThemeSwitcherService, public navCtrl: NavController, animationService: AnimationService, private router: Router, private httpService: RemoteServiceService) {

    // this.animator = animationService.builder();
    this.Details;





    // this.presentLoadingWithOptions();

    console.log('==================');

    if (this.platform.is('ios')) {

      this.storage.get('ThemeMode').then((res) => {


        if (res === 'day') {
          this.themeSwitcher.setTheme('day');
        }

        if (res === 'night') {
          this.themeSwitcher.setTheme('night');
        }


      });
    }
    else {

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


  ngOnInit() {

  }


  ionViewCanEnter() {

  }

  // animateElem() {
  //   this.animator.setType('flipInX').show(this.myElem.nativeElement);
  // }


  Details() {

  }

  OpenDetail(a) {
    console.log(a);

    let navigationExtras: NavigationExtras = {
      queryParams: {
        current: a.title
      }
    }
    this.navCtrl.navigateForward(['rabbana-list'], navigationExtras);
  }

  settingsPage() {
    this.router.navigate(['settings']);
  }





}