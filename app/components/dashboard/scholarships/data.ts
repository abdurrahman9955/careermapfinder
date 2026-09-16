import { Scholarship, ScholarshipBatch } from './types';

import { andhraPradeshScholarships } from "@/app/utils/scholarship/andhra-pradesh";
import { arunachalPradeshScholarships } from "@/app/utils/scholarship/arunachal-pradesh";
import { assamScholarships } from "@/app/utils/scholarship/assam";
import { biharScholarships } from "@/app/utils/scholarship/bihar";
import { chhattisgarhScholarships } from "@/app/utils/scholarship/chhattisgarh";
import { goaScholarships } from "@/app/utils/scholarship/goa";
import { gujaratScholarships } from "@/app/utils/scholarship/gujarat";
import { haryanaScholarships } from "@/app/utils/scholarship/haryana";
import { himachalPradeshScholarships } from "@/app/utils/scholarship/himachal-pradesh";
import { jharkhandScholarships } from "@/app/utils/scholarship/jharkhand";
import { karnatakaScholarships } from "@/app/utils/scholarship/karnataka";
import { keralaScholarships } from "@/app/utils/scholarship/kerala";
import { madhyaPradeshScholarships } from "@/app/utils/scholarship/madhya-pradesh";
import { maharashtraScholarships } from "@/app/utils/scholarship/maharashtra";
import { manipurScholarships } from "@/app/utils/scholarship/manipur";
import { meghalayaScholarships } from "@/app/utils/scholarship/meghalaya";
import { mizoramScholarships } from "@/app/utils/scholarship/mizoram";
import { nagalandScholarships } from "@/app/utils/scholarship/nagaland";
import { odishaScholarships } from "@/app/utils/scholarship/odisha";
import { punjabScholarships } from "@/app/utils/scholarship/punjab";
import { rajasthanScholarships } from "@/app/utils/scholarship/rajasthan";
import { sikkimScholarships } from "@/app/utils/scholarship/sikkim";
import { tamilNaduScholarships } from "@/app/utils/scholarship/tamil-nadu";
import { telanganaScholarships } from "@/app/utils/scholarship/telangana";
import { tripuraScholarships } from "@/app/utils/scholarship/tripura";
import { uttarPradeshScholarships } from "@/app/utils/scholarship/uttar-pradesh";
import { uttarakhandScholarships } from "@/app/utils/scholarship/uttarakhand";
import { westBengalScholarships } from "@/app/utils/scholarship/west-bengal";
import { nationalLevelScholarships } from "@/app/utils/scholarship/pan-india";

const ALL_BATCHES: ScholarshipBatch[] = [
  andhraPradeshScholarships,
  arunachalPradeshScholarships,
  assamScholarships,
  biharScholarships,
  chhattisgarhScholarships,
  goaScholarships,
  gujaratScholarships,
  haryanaScholarships,
  himachalPradeshScholarships,
  jharkhandScholarships,
  karnatakaScholarships,
  keralaScholarships,
  madhyaPradeshScholarships,
  maharashtraScholarships,
  manipurScholarships,
  meghalayaScholarships,
  mizoramScholarships,
  nagalandScholarships,
  odishaScholarships,
  punjabScholarships,
  rajasthanScholarships,
  sikkimScholarships,
  tamilNaduScholarships,
  telanganaScholarships,
  tripuraScholarships,
  uttarPradeshScholarships,
  uttarakhandScholarships,
  westBengalScholarships,
  nationalLevelScholarships,
];

export const ALL_SCHOLARSHIPS: Scholarship[] = ALL_BATCHES.flatMap((batch) =>
  batch.scholarships.map((sch) => ({
    ...sch,
    stateOrigin: batch.state,
  }))
);

export const ALL_STATES: string[] = Array.from(
  new Set(ALL_BATCHES.map((b) => b.state))
).sort();