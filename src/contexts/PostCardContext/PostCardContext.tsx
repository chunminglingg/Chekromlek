"use client";
import React, { ReactNode, createContext, useState } from "react";
import { PostCardType } from "../@Types/PostCardType";

interface CardContextProp {
  children: ReactNode;
}

interface ContextProps {
  CardInfo: PostCardType[];
  setCardInfo: React.Dispatch<React.SetStateAction<PostCardType[]>>;
  toggleFavorite: (id: string) => void;
}

export const MyCardContext = createContext<ContextProps>({
  CardInfo: [],
  setCardInfo: () => {},
  toggleFavorite: () => {},
});

const CardContext: React.FC<CardContextProp> = ({
  children,
}: CardContextProp) => {
  const [CardInfo, setCardInfo] = useState<PostCardType[]>([
    {
      id: "1",
      profile: "/card-svg/avatar.svg",
      hour: 10,
      title: "តើកត្តាអ្វីខ្លះដែលធ្វើអោយសម័យអង្គររុងរឿង?",
      username: "Kimlang Tieng",
      postImage: '/imgs/AngkorWat.jpg',
      caption:
        "សម័យអង្គរអាចចាត់ទុកជាសម័យរុងរឿងបំផុត ហើយកត្តាដែលធ្វើអោយសម័យអង្គររុងរឿងមានច្រើនកត្តាដូចជា៖ -ពិធីទេវរាជៈ ជាពិធីមួយដែលធ្វើអោយប្រជាជនមានឯករាជ្យជាតិ មានទំនុកចិត្ត និងគោរពចំពោះព្រះមហាក្សត្រ។ ព្រះមហាក្សត្រគឺជាអាទិទេព អាទិទេពគឺជាស្តេច។ រាលបញ្ជាទាំងឡាយរបស់ព្រះមហាក្សត្រ ជាបញ្ជារបស់អាទិទេព។ នេះជាកត្តាមួយដ៏សំខាន់ដែលព្រះមហាក្សត្រមានលទ្ធភាពក្នុងការគ្រប់គ្រង និងកសាងប្រាសាទធំៗបាន។ - វិស័យយោធាៈ កងទ័ពសម័យអង្គរ ជាកងទ័ពខ្លាំងពូកែ។ ព្រះរាជាជាអ្នកបញ្ជាកងទ័ពដោយផ្ទាល់។ ពេលប្រយុទ្ធជាមួយខ្មាំងសត្រូវ ព្រះមហាក្សត្រចេញប្រយុទ្ធដោយផ្ទាល់ព្រះអង្គ។ ព្រះគូរូដ៏ល្អនេះធ្វើអោយកងទ័ពមានសេចក្តីក្លាហាន និងខ្លាំងពូកែ។ -វិស័យរដ្ឋបាលៈ មានការរៀបចំ និងគ្រប់គ្រងត្រឹមត្រូវតាំងពីថ្មាក់លើ រហូតដល់ថ្នាក់ក្រោម។ វិស័យតុលាការៈ យុត្តិធម៌សង្គមត្រូវបានធានា។ ព្រះរាជាកាត់សេចក្តីជូនប្រជាពលរដ្ឋ។ -វិស័យកសិកម្មៈ មានការរីកចំរើនដោយការធ្វើទំនប់នឹក ប្រឡាយទឹកបំរើវិស័យកសិកម្ម។ ផលស្រូវត្រូវបាននាំចេញទៅលក់នៅក្រៅប្រទេស។ -វិស័យសេដ្ឋកិច្ចៈ មានការរីកចំរើនដោយនាំទិន្នផលយកទៅលក់នៅប្រទេសក្រៅ។ - វិស័យវប្បធម៌ៈ មានការរីកចំរើន រហូតដល់មានសាកលវិទ្យាល័យ។ -ក្រៅពីកត្តាដូចរៀបរាប់ខាងលើ នៅមានកត្តាផ្សេងៗទៀត ដែលបង្កលក្ខណៈធ្វើអោយសម័យអង្គររុងរឿងដូចជា: ព្រះមហាក្សត្រសម័យអង្គរ បានប្រកាន់នយោបាយពង្រីកទឹកដីលើរដ្ឋតូចតាច ហើយចងសម្ព័ន្ធជាមួយប្រទេសធំៗ នយោបាយនេះមានលទ្ធភាពអាចប្រមូលទ្រព្យសម្បត្តិពីបណ្តារដ្ឋតូចៗ ដើម្បីក៏សាងប្រទេស។ម្យ៉ាងទៀតសម័យអង្គរមានលក្ខណៈងាយស្រួលក្នុងការកសាងប្រទេសជាតិដោយសារទីក្រុងនៅសម័យនោះនៅចំកណ្តាលប្រទេស ហើយជនជាតិជិតខាងនៃយើងពុំទាន់មានលទ្ធភាពបង្កការរំខាន ដល់ការកសាងជាតិរបស់យើងឡើង។​ ឯកសារយោង៖ វប្បធម៌ទូទៅ ដោយលោក ឡាត សង្វាត",

      isFavorite: false,
    },

    {
      id: "2",
      profile: "/imgs/profile.svg",
      hour: 2,
      username: "Tan Hangsapho",
      title: "តើ​អ្វីទៅ​ជា​ផលិតផល​ក្នុងស្រុក​សរុប (ផ.ស.ស)?",
      // postImage: "/socialMedia/imageContent.svg",
      caption:
        "ផលិត​ផល​ក្នុង​ស្រុក​សរុប​ គឺ​ជាសូចនាករ​សេដ្ឋកិច្ចមួយ​ ដែល​វាស់​វែងអំពី​ ទ្រព្យសម្បត្តិ​របស់​ប្រជាជាតិ​មួយ ឬជា​អ្វី​ៗ​ដែល​ត្រូវ​បាន​ផលិត​ឡើង ​ក្នុង​ប្រទេស​មួយ​ ក្នុង​រយៈពេល​មួយ​ឆ្នាំ។ ដើម្បី​ធ្វើការ​គណនា ផលិត​ផល​ក្នុង​ស្រុក​សរុប​ គេ​អាច​ប្រើប្រាស់​​ជម្រើស​មួយ​ គឺ​វាស់​​តម្លៃ​បន្ថែម (Values added / valeur ajoutée) នៃ​អ្វី​ៗដែល​បាន​ផលិត​ នៅក្នុងប្រទេស​មួយ។ យើង​អាច​កំណត់​​តម្លៃ​បន្ថែម​ ជា​ពីរប្រភេទ។ ទីមួយ​គឺ តម្លៃ​បន្ថែមនៃទំនិញ​អពាណិជ្ជ (non commercial products /​ produits non commercials) សំដៅ​ដល់​ ទំនិញទាំង​ឡាយ​ណា  ដែល​ផលិត​ដោយ​រដ្ឋបាល​មួយ ដូចជា ការ​បង្រៀនគួរ​មួយ​ម៉ោង​ ដោយ​គ្រួបង្រៀន​ម្នាក់។ ទីពីរ​គឺ តម្លៃ​បន្ថែម​នៃ​ទំនិញពាណិជ្ជ (commercial products /​ produits commercials) សំដៅ​ដល់​ ទំនិញ​ទាំង​ឡាយ​ណា ដែល​ផលិត​ដោយ សហគ្រាស​ឯក​ជន។ ទំនិញ​ទាំង​នេះគឺ​ជា​ ប្រាក់​ចំណូល​ពីការ​លក់ ដែលមាន​តម្លៃ​ស្មើ​នឹង ​ថ្លៃ​ទំនិញ គុណ​នឹង​បរិមាណ​នៃ​ទំនិញលក់ទាំង​​នោះ ប៉ុន្តែ​ត្រូវ​ដកចេញ ការ​ប្រើប្រាស់​អន្តរការី។", // Assuming you want this to be consistent
      isFavorite: false,
    },
    {
      id: "3",
      profile: "/card-svg/avatar.svg",
      hour: 2,
      username: "Khiev Navin",
      // title: "រឿង ភូមិតិរច្ឆាន",
      caption:
        "រឿង ភូមិតិរច្ឆាន គឺជាប្រលោមលោកមួយបែបប្រវត្តិសាស្ត្រ ដែលបានរៀបរាប់ពីការជិះជាន់ គាបសង្កត់ កេងប្រវ័ញ្ច ពីសំណាក់ ពួកអាណានិគមបារាំង និងបានរៀបរាប់ពីទុក្ខវេទនា និងជីវភាពរស់នៅរបស់ប្រជាជនកម្ពុជា នៅសម័យនោះ។ រឿងនេះត្រូវបានរៀបរៀង និងចងក្រងដោយលោក ឌឹក គាម និងលោក ឌឿក អំ នៅឆ្នាំ ១៩៦៤ ដល់ ១៩៦៥ ហើយចេញផ្សាយជាសាធារណៈ នៅឆ្នាំ ១៩៧១។ រឿង ភូមិតិរច្ឆាន បានត្រូវរៀបរៀងឡើងនៅឆ្នាំ ១៩៦៤ - ១៩៦៥ ដោយអ្នកនិពន្ធ ឌឹក គាម និង ឌឿក អំ ហើយបានត្រូវបោះពុម្ពផ្សាយ ជាសាធារណៈ នៅឆ្នាំ ១៩៧១។ រឿងនេះ បានឆ្លុះបញ្ចាំងឲ្យឃើញ ទំនាស់ដ៏ស្រួចស្រាល រវាងពលករកម្ពុជា ដែលរងការជិះជាន់ កេងប្រវ័ញ្ចយ៉ាងខ្លាំងក្លា នឹងពួកអាណានិគមបារាំង បនសក្ដិភូមិ បនមន្ត្រីអាយ៉ាងរបស់វា។ព្រឹត្តិការណ៍ ១៨ មេសា ១៩២៥ របស់ប្រជាជនឃុំក្រាំងលាវ ជាព្រឹត្តិការណ៍មួយ បានទាក់ទាញចិត្តអ្នកនិពន្ធ ក្នុងការនិពន្ធស្នាដៃនេះ ដើម្បីដាស់សតិស្មារតីប្រជាជន ឲ្យនឹកឃើញជាប់ជានិច្ច នូវប្រវត្តិយ៉ាងឈឺចាប់ខ្លោចផ្សា ដែលពួកអាណានិគមបង្កឡើងនោះ។", // Assuming you want this to be consistent
      isFavorite: false,
    },
    {
      id: "4",
      profile: "/card-svg/avatar.svg",
      hour: 2,
      username: "Sok Leng",
      title: "What skills should I learn to become a full-stack developer?",
      caption:
        "To become a successful full-stack developer, youll need to master a diverse range of skills. Here a breakdown of the essential areas to focus on: -Front-End Programming Languages and Frameworks. -Back-End Programming Languages and Frameworks. -Cybersecurity Skills. -User Interface (UI) and User Experience (UX). -A Big-Picture Understanding of Development. -Ability to Adapt Quickly. -Problem-Solving and Communication.", // Assuming you want this to be consistent
      isFavorite: false,
    },
    {
      id: "5",
      profile: "/imgs/mypf.jpg",
      hour: 2,
      username: "Sok Sarun",
      title:
        "តើ​រដ្ឋ​ធម្មនុញ្ញ​កម្ពុជា​មាន​ចំនួន​ប៉ុន្មាន និង​ធ្វើ​វិសោធនកម្ម​ប៉ុន្មាន​ដង​?",
      caption:
        "គឺ​ចាប់​តាំង​ពី​ឆ្នាំ​១៩៤៧​មក ​កម្ពុជា​មាន​រដ្ឋធម្មនុញ្ញ​ចំនួន​៦ ដែល​មាន​ការ​ផ្លាស់ប្តូរ​ពី​រដ្ឋធម្មនុញ្ញ​មួយ​ទៅ​រដ្ឋ​ធម្មនុញ្ញ​មួយ អាស្រ័យ​ទៅ​តាម​បរិបទ​នយោបាយ​របស់​ប្រទេស ចាប់​ពី​ឆ្នាំ​១៩៤៧ រហូត​មក​ដល់​ឆ្នាំ១៩៩៣។ ក្នុង​នោះ រួមមាន៖ 1-រដ្ឋ​ធម្មនុញ្ញ​ទី១ ត្រូវ​បាន​អនុម័ត និង​ប្រកាស​ឲ្យ​ប្រើ​នៅ​ក្នុង​ឆ្នាំ​១៩៤៧ (នៅ​ក្នុង​របប​ព្រះរាជាណាចក្រ​ទី​១) 2-រដ្ឋ​ធម្ម​នុញ្ញទី២ ត្រូវ​បាន​ប្រកាស​ឲ្យ​ប្រើ​នៅ​ក្នុង​ឆ្នាំ​១៩៧២ (បន្ទាប់​ពី​ផ្លាស់​ប្តូរ​របប) 3-រដ្ឋធម្មនុញ្ញ​ទី​៣ ត្រូវ​បាន​ប្រកាស​ឲ្យ​ប្រើ​នៅ​ក្នុង​ឆ្នាំ​១៩៧៦ (របប​កម្ពុជា​ប្រជាធិបតេយ្យ) 4-រដ្ឋធម្មនុញ្ញ​ទី៤ ត្រូវ​បាន​ប្រកាស​ឲ្យ​ប្រើ​នៅ​ក្នុង​ឆ្នាំ​១៩៨១ (របប​សាធារណរដ្ឋ​ប្រជាមានិត​កម្ពុជា) 5-រដ្ឋធម្មនុញ្ញ​ទី៥ ត្រូវ​បាន​ប្រកាស​ឲ្យ​ប្រើ​នៅ​ក្នុង​ឆ្នាំ​១៩៨៩ (ក្នុង​របប​រដ្ឋ​កម្ពុជា​) 6-រដ្ឋ​ធម្មនុញ្ញ​ទី​៦ ត្រូវ​បាន​ប្រកាស​ឲ្យ​ប្រើ​នៅ​ក្នុង​ឆ្នាំ​១៩៩៣​។", // Assuming you want this to be consistent
      isFavorite: false,
    },
    {
      id: "6",
      profile: "/card-svg/avatar.svg",
      hour: 2,
      username: "Por Hai",
      title: "ប្រវត្តិរ៉ុកកែតអវកាស​រុស្ស៊ីធុន Soyuz",
      caption:
        "រុស្ស៊ី គឺ​ជា​ប្រទេស​មហាអំណាច​ដ៏​ចម្បងមួយ នៅ​ក្នុង​វិស័យ​អវកាស នៅក្នុង​ពេល​បច្ចុប្បន្ន​ ជាមួយ​នឹង​បច្ចេកវិទ្យា​រ៉ុកកែត និង​យាន​អវកាស ដ៏​ល្បីល្បាញ​មួយ​នៅលើ​ពិភពលោក គឺ សូយូស (Soyuz)។ Soyuz ​ជា​បច្ចេកវិទ្យា​បន្សល់​ទុក​តាំង​ពី​សម័យ​សហភាព​សូវៀត ហើយ​ត្រូវបាន​អភិវឌ្ឍ​ចេញ​ពី​បច្ចេកវិទ្យា​រ៉ុកកែត V2 របស់​អាល្លឺម៉ង់ ដោយ​វិស្វករ​សូវៀត ឈ្មោះ Sergei Korolev ដែល​ត្រូវ​បាន​គេចាត់ទុក​ជា​បិតា​នៃ​កម្មវិធី​អវកាស​សូវៀត។​​", // Assuming you want this to be consistent
      isFavorite: false,
    },
    {
      id: "7",
      profile: "/card-svg/avatar.svg",
      hour: 2,
      username: "Sok Leng",
      title: "អ្វីទៅជា Silicon Valley?",
      postImage: "/imgs/silicon.jpg",
      caption:
        "ជា​ឈ្មោះ​តំបន់​ដែល​ស្ថិត​នៅ​ផ្នែក​ខាង​ត្បូង​នៃ San Francisco Bay Area ចន្លោះ​ភាគ​ខាង​ជើង​នៃ​រដ្ឋ California សហរដ្ឋអាមេរិក។ ក្នុង​តំបន់​នេះ​ប្រមូល​ផ្ដុំ​ទៅ​ដោយ​ទីស្នាក់ការ​នៃ​ក្រុមហ៊ុន​បច្ចេកវិទ្យា​ធន់​ខ្ពស់ ដែល​មាន ៣៩ អាជីវកម្ម​ស្ថិត​ក្នុង​បញ្ជី Fortune ទាំង ១០០០ និង​មាន​បណ្ដា​ក្រុមហ៊ុន​ធ្វើ​ជំនួញ (Startup) រាប់​ពាន​កន្លែង។  ឈ្មោះ Silicon Valley បង្កើត​ឡើង​ដំបូង​បង្អស់​ដោយ​លោក Don Hoefler ដែល​គាត់​បាន​ប្រើ​ចុះ​ផ្សាយ​លើ​ចំណងជើង​នៃ​ទំព័រ​កាសែត​ប្រចាំ​សប្ដាហ៍​របស់ Eletronics News ដោយ​ដាក់​ថា Silicon Valley in the USA” ហើយ​បាន​ចុះ​ផ្សាយ​នា​ថ្ងៃ​ទី ១១ មករា​ឆ្នាំ ១៩៧១។​ បន្ទាប់​មក​ពាក្យ​នេះ បាន​រាលដាល​យ៉ាង​ខ្លាំង​នៅ​ដើម​សតវត្ស​ឆ្នាំ ១៩៨០ ដោយ​មាន​ការ​ចូលរួម​ពី​ក្រុមហ៊ុន IBM PC ទាក់ទង​នឹង​ប្រព័ន្ធ Hardware/Software នៃ​ការ​ចែកចាយ​ផលិតផល​លើ​ទីផ្សារ។ សូម្បី​តែ​ក្រុមហ៊ុន *Apple, Cisco, Google, HP, Intel និង Oracle* ជា​ដើម សុទ្ធ​សឹង​តែ​ឈរ​ជើង​ក្នុង​តំបន់ Silicon Valley។ ទន្ទឹម​នឹង​ការ​អភិវឌ្ឍ​ផ្នែក​បច្ចេកវិទ្យា​កម្រិត​ខ្ពស់​ចាប់​តាំង​ពី​សតវត្ស​ទី ២០ តំបន់​ពិសេស​មួយ​នេះ​បាន​ក្ដោបក្ដាប់​ទីផ្សារ​វិនិយោគ ១ ភាគ ៣ នៃ​ផ្ទៃ​ប្រទេស​អាមេរិក​ទាំង​មូល។​", // Assuming you want this to be consistent
      isFavorite: false,
    },
    {
      id: "8",
      profile: "/card-svg/avatar.svg",
      hour: 2,
      username: "Chan Somnang",
      title: "ស្ពានប្រាប់ទិស! ស្ពានបុរាណខ្មែរនៅសម័យអង្គរ អាយុកាលជិត១០០០ឆ្នាំ នៅតែរឹងមាំ",
      caption:
        "ស្ពានប្រាប់ទិស ឬស្ពានកំពង់ក្តី ជាស្ពានបុរាណដែលវែងជាងគេនៅប្រទេសកម្ពុជាក្នុងសម័យអង្គរ។ ស្ពាននេះបានកសាងឡើងក្នុងសតវត្សរ៍ទី១២នៃគ្រិស្តសករាជ(ចម្លាក់នាគ និងថ្មគោលវាជាសិល្បៈសម័យបាយ័ន១១៨១-១២២០) ដោយមានប្រវែង៧៥ម៉ែត្រ និងមានកំពស់ ១៤ម៉ែត្រ ។ ស្ពានប្រាប់ទិស មានទីតាំងនៅតាមបណ្ដោយផ្លូវជាតិលេខ៦ ចម្ងាយប្រមាណ ៦០គ.ម ពីក្រុងសៀមរាប នៅខាងលិចឆៀងខាងជើងផ្សារកំពង់ក្តីប្រមាណជា៥០ម៉ែត្រស្ថិត ក្នុងឃុំកំពង់ក្ដី ស្រុកជីក្រែង ខេត្តសៀមរាប សាងសង់កាត់ស្ទឹងជីក្រែង មានរាងដូចជានាគរាជកំពុងលូនក្រាបដើម្បីឲ្យអ្នកដំណើរឆ្លងកាត់ពីលើ។ លើសពីនេះ ស្ពានប្រាប់ទិស ជាស្ពានបុរាណដែលបានសាង សង់ពីថ្មបាយក្រៀមនិងថ្មភក់ដែលមានបណ្ដោយ ៨៦ម៉ែត្រ ទទឹង ១៦ម៉ែត្រ កម្ពស់ពីបាតស្ទឹង ១០ម៉ែត្រ មានរន្ធត្រដេវ (ប្រឡោះសម្រាប់ចរន្តទឹកឆ្លងកាត់)ចំនួន ២១ និង សសរចំនួន២០។ នៅក្នុងពេលបច្ចុប្បន្ននេះស្ពានប្រាប់ទិស ពុំសូវមានទេសចរទៅទស្សនាស្ពាននេះដោយសារតែវាមានទីតាំងឆ្ងាយពីទីរួមខេត្តដែលនំាឲ្យមានការលំបាកក្នុងការធ្វើដំណើររបស់ភ្ញៀវទេចរ ជាពិសេសភ្ញៀវអន្តរជាតិ។ រូបភាពនៃស្ពាននេះ ក៏ត្រូវបានប្រើប្រាស់នៅក្រដាសប្រាក់ ៥,០០០ រៀលខ្មែរយើងផងដែរនៅពេលបច្ចុប្បន្ន។​", // Assuming you want this to be consistent
      isFavorite: false,
    },
  ]);

  function toggleFavorite(id: string) {
    const updatedCard = CardInfo.map((card) => {
      if (card.id == id) {
        return {
          ...card,
          isFavorite: !card.isFavorite,
        };
      }
      return card;
    });
    setCardInfo(updatedCard);
  }

  // State Value
  const ContextValue = {
    CardInfo,
    setCardInfo,
    toggleFavorite,
    // handleAddCard
  };

  return (
    <MyCardContext.Provider value={ContextValue}>
      {children}
    </MyCardContext.Provider>
  );
};

export default CardContext;
