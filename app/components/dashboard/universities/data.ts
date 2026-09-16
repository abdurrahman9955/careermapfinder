import { University, StateUniversityBatch } from './types';
import { andhraPradeshUniversities } from '@/app/utils/universities/andhra-pradesh';
import { arunachalPradeshUniversities } from '@/app/utils/universities/arunachal-pradesh';
import { assamUniversities } from '@/app/utils/universities/assam';
import { biharUniversities } from '@/app/utils/universities/bihar';
import { chhattisgarhUniversities } from '@/app/utils/universities/chhattisgarh';
import { goaUniversities } from '@/app/utils/universities/goa';
import { gujaratUniversities } from '@/app/utils/universities/gujarat';
import { haryanaUniversities } from '@/app/utils/universities/haryana';
import { himachalUniversities } from '@/app/utils/universities/himachal-pradesh';
import { jharkhandUniversities } from '@/app/utils/universities/jharkhand';
import { karnatakaUniversities } from '@/app/utils/universities/karnataka';
import { keralaUniversities } from '@/app/utils/universities/kerala';
import { madhyaPradeshUniversities } from '@/app/utils/universities/madhya-pradesh';
import { maharashtraUniversities } from '@/app/utils/universities/maharashtra';
import { manipurUniversities } from '@/app/utils/universities/manipur';
import { meghalayaUniversities } from '@/app/utils/universities/meghalaya';
import { mizoramUniversities } from '@/app/utils/universities/mizoram';
import { nagalandUniversities } from '@/app/utils/universities/nagaland';
import { odishaUniversities } from '@/app/utils/universities/odisha';
import { punjabUniversities } from '@/app/utils/universities/punjab';
import { rajasthanUniversities } from '@/app/utils/universities/rajasthan';
import { sikkimUniversities } from '@/app/utils/universities/sikkim';
import { tamilNaduUniversities } from '@/app/utils/universities/tamil-nadu';
import { telanganaUniversities } from '@/app/utils/universities/telangana';
import { tripuraUniversities } from '@/app/utils/universities/tripura';
import { uttarPradeshUniversities } from '@/app/utils/universities/uttar-pradesh';
import { uttarakhandUniversities } from '@/app/utils/universities/uttarakhand';
import { westBengalUniversities } from '@/app/utils/universities/west-bengal';
import { nationalCapitalTerritoryUniversities } from '@/app/utils/universities/national-capital-territory';

const ALL_BATCHES: StateUniversityBatch[] = [
  andhraPradeshUniversities,
  arunachalPradeshUniversities,
  assamUniversities,
  biharUniversities,
  chhattisgarhUniversities,
  goaUniversities,
  gujaratUniversities,
  haryanaUniversities,
  himachalUniversities,
  jharkhandUniversities,
  karnatakaUniversities,
  keralaUniversities,
  madhyaPradeshUniversities,
  maharashtraUniversities,
  manipurUniversities,
  meghalayaUniversities,
  mizoramUniversities,
  nagalandUniversities,
  odishaUniversities,
  punjabUniversities,
  rajasthanUniversities,
  sikkimUniversities,
  tamilNaduUniversities,
  telanganaUniversities,
  tripuraUniversities,
  uttarPradeshUniversities,
  uttarakhandUniversities,
  westBengalUniversities,
  nationalCapitalTerritoryUniversities,
];

export const ALL_UNIVERSITIES: University[] = ALL_BATCHES.flatMap((batch) =>
  batch.universities.map((uni) => ({
    ...uni,
    stateOrigin: batch.state,
  }))
);

export const ALL_STATES: string[] = Array.from(
  new Set(ALL_BATCHES.map((b) => b.state))
).sort();