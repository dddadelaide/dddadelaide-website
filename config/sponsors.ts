import { Sponsor, SponsorType } from './types'

const platinumSponsors: Sponsor[] = []

const goldSponsors: Sponsor[] = [
  {
    id: 'quoterite',
    imageUrl: '/static/images/sponsors/quoterite.png',
    name: 'Quoterite',
    type: SponsorType.Gold,
    url: 'https://www.quoterite.com.au/',
  },
  {
    id: 'encode',
    imageUrl: '/static/images/sponsors/encode.png',
    name: 'Encode Talent',
    type: SponsorType.Gold,
    url: 'https://www.encodetalent.com.au/',
  },
  {
    id: 'splose',
    imageUrl: '/static/images/sponsors/splose.png',
    name: 'Splose',
    type: SponsorType.Gold,
    url: 'https://splose.com/',
  },
  {
    id: 'octopus',
    imageUrl: '/static/images/sponsors/octopus-deploy.png',
    name: 'Octopus Deploy',
    type: SponsorType.Gold,
    url: 'https://www.octopus.com/',
  },
  {
    id: 'adelaideUniversity',
    imageUrl: '/static/images/sponsors/university-of-adelaide.png',
    name: 'The University of Adelaide',
    type: SponsorType.Service,
    url: 'https://www.adelaide.edu.au/',
  },
]

const silverSponsors: Sponsor[] = [
]

const coffeeCartSponsors: Sponsor[] = [

]

const serviceSponsors: Sponsor[] = [
  {
    id: 'sixpivot',
    imageUrl: '/static/images/sponsors/sixpivot.png',
    name: 'SixPivot',
    type: SponsorType.Service,
    url: 'https://www.sixpivot.com/',
    serviceProvided: 'Coffee cart'
  },
  {
    id: 'intopia',
    imageUrl: '/static/images/sponsors/intopia.png',
    name: 'Intopia',
    type: SponsorType.Service,
    url: 'https://intopia.digital/',
    serviceProvided: 'Major prize'
  },
]

const communityPartners: Sponsor[] = [
  {
    id: 'maxmine',
    imageUrl: '/static/images/sponsors/maxmine.png',
    name: 'MaxMine',
    type: SponsorType.Community,
    url: 'https://maxmine.com.au/',
  },
  {
    id: 'ozrunways',
    imageUrl: '/static/images/sponsors/ozrunways.png',
    name: 'OzRunways',
    type: SponsorType.Community,
    url: 'https://www.ozrunways.com/au/',
  },

  {
    id: 'aligent',
    imageUrl: '/static/images/sponsors/aligent.png',
    name: 'Aligent',
    type: SponsorType.Community,
    url: 'https://aligent.com.au/',
  },
  // {
  //   id: 'fivecast',
  //   imageUrl: '/static/images/sponsors/fivecast.png',
  //   name: 'Fivecast',
  //   type: SponsorType.Community,
  //   url: 'http://tiimely.com/',
  // },
]

const Sponsors: Sponsor[] = [
  ...platinumSponsors,
  ...goldSponsors,
  ...silverSponsors,
  ...coffeeCartSponsors,
  ...serviceSponsors,
  ...communityPartners,
]

export default Sponsors
