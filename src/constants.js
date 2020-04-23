const SPORTS = {
  KOSARKA: 'kosarka',
  NOGOMET: 'nogomet',
  BORILACKI: 'borilacki',
  RUKOMET: 'rukomet',
  ODBOJKA: 'odbojka',
  VATERPOLO: 'vaterpolo',
  PLIVANJE: 'plivanje',
  ATLETIKA: 'atletika',
  GIMNASTIKA: 'gimnastika',
  SKIJANJE: 'skijanje',
  HOKEJ: 'hokej',
  KLIZANJE: 'klizanje',
  TENIS: 'tenis',
  BADMINTON: 'badminton',
  SQUASH: 'squash',
  KAJAK: 'kajak',
  VESLANJE: 'veslanje',
  JEDRILICARSTVO: 'jedrilicarstvo',
}

const SAVJETI = 'savjeti'
const POZNATI = 'poznati'
const INDIVIDUALNO = 'individualno'
const PAR = 'par'

const filterTags = [SAVJETI, POZNATI, INDIVIDUALNO, PAR]
const filterLabels = {}
filterLabels[SAVJETI] = 'Savjeti trenera'
filterLabels[POZNATI] = 'Poznati sportaši'
filterLabels[INDIVIDUALNO] = 'Individualne vježbe'
filterLabels[PAR] = 'Vježbe u paru'

const sportGroups = {
  kosarka: [SPORTS.KOSARKA],
  nogomet: [SPORTS.NOGOMET],
  borilacki: [SPORTS.BORILACKI],
  rukomet: [SPORTS.RUKOMET],
  odbojka: [SPORTS.ODBOJKA],
  vodeni: [SPORTS.VATERPOLO, SPORTS.PLIVANJE],
  atletika: [SPORTS.ATLETIKA, SPORTS.GIMNASTIKA],
  zimski: [SPORTS.SKIJANJE, SPORTS.HOKEJ, SPORTS.KLIZANJE],
  tenis: [SPORTS.TENIS, SPORTS.BADMINTON, SPORTS.SQUASH],
  vodeni2: [SPORTS.KAJAK, SPORTS.VESLANJE, SPORTS.JEDRILICARSTVO],
}

const sportGroupKeys = [
  'kosarka',
  'nogomet',
  'borilacki',
  'rukomet',
  'odbojka',
  'vodeni',
  'atletika',
  'zimski',
  'tenis',
  'vodeni2',
]

const sportGroupLabels = {
  kosarka: 'Košarka',
  nogomet: 'Nogomet',
  borilacki: 'Borilački sportovi',
  rukomet: 'Rukomet',
  odbojka: 'Odbojka',
  vodeni: 'Vaterpolo i plivanje',
  atletika: 'Atletika i gimnastika',
  zimski: 'Skijanje, hokej, klizanje',
  tenis: 'Tenis, badminton, squash',
  vodeni2: 'Kajak, veslanje, jedriličarstvo',
}

module.exports = {
  SPORTS,
  filterTags,
  filterLabels,
  sportGroups,
  sportGroupKeys,
  sportGroupLabels,
}

// exports.SPORTS = SPORTS
// exports.FILTERS = FILTERS
// exports.filterLabels = filterLabels
// exports.sportGroups = sportGroups
// exports.sportGroupKeys = sportGroupKeys
// exports.sportGroupLabels = sportGroupLabels
