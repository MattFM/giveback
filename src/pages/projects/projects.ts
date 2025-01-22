import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'Second Home Studio and Cafe',
    description: 'Eat, drink and join classes at a studio and cafe aiming to make art more accessible',
    demoLink: '#',
    tags: ['Scotland', 'UK']
  },
  {
    name: 'Happy Tosti',
    description: 'Visit a toasted sandwich cafe that trains and employs people with disabilities',
    demoLink: '#',
    tags: ['Netherlands']
  },
  {
    name: 'Santorini Animal Welfare Association',
    description: 'See the animals and join daily walks with rescued dogs in Santorini',
    demoLink: '#',
    tags: ['Greece']
  },
  {
    name: 'Cafe Ness by the Cathedral',
    description: 'Stop for a cuppa at this social enterprise cafe by the River Ness',
    demoLink: '#',
    postLink: '#',
    tags: ['Scotland', 'UK']
  },
  {
    name: 'Burm and Emily’s Elephant Sanctuary',
    description: 'Visit an ethical elephant sanctuary that works closely with the local community',
    demoLink: '#',
    tags: ['Thailand']
  },
  {
    name: 'Zibel',
    description: 'Help to keep Malta’s coastline clean in monthly community clean-ups',
    demoLink: '#',
    tags: ['Malta']
  },
  {
    name: 'Gorilla Conservation Coffee',
    description: 'Meet local coffee growers in Uganda and support Gorilla conservation efforts',
    demoLink: '#',
    tags: ['Uganda']
  },
  {
    name: 'Forty Hall Vineyard',
    description: 'Enjoy a tour and tasting at a social enterprise vineyard in north London',
    demoLink: '#',
    tags: ['England', 'UK']
  }
]
