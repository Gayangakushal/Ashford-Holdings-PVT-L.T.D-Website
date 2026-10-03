"""Extract the client artwork requested by the user from their profile PDF."""
import json
from pathlib import Path
import sys

# Requires PyMuPDF: python -m pip install pymupdf
import pymupdf

logos = [
    (46, 'Unilever'), (63, 'Ceylon Biscuits Limited (CBL)'),
    (75, 'Wijaya Products'), (90, 'MD'), (97, 'Nestlé'), (98, 'Diana'),
    (22, 'Fab'), (21, 'KFC'), (19, 'Burger King'), (17, 'Maliban'), (99, 'Cargills'),
    (23, 'Farm Chemie'), (24, 'Lankem'), (26, 'Chevron'), (27, 'Baurs'),
    (29, 'Orit'), (31, 'Coats'), (33, 'Camso'), (34, 'Sil ueta'), (36, 'MAS'), (37, 'ATG'),
    (38, 'Honda'), (40, 'Toyota'), (41, 'DIMO'), (42, 'AMW'), (43, 'DPMC'),
    (44, 'Nawaloka Hospitals'), (47, 'Durdans Hospital'), (49, 'Lanka Hospitals'),
    (51, 'Suwasewana Hospitals'), (52, 'Asiri Health'),
    (53, 'Amaya Lake'), (55, 'Araliya Green Hills'), (57, 'Jetwing'), (58, 'Club Hotel Dolphin'),
    (95, 'Palm Garden Hotel'), (66, 'The Kingsbury'), (65, 'Taj'), (61, 'Cinnamon'),
    (60, 'Hilton'), (93, 'Colombo Swimming Club'), (94, 'Oak Ray Hotels'),
    (67, 'Abans'), (68, 'Softlogic'), (69, 'Civimech'), (70, 'Sanken Construction'),
    (72, 'Singer'), (73, 'Tritech Engineers'), (76, 'K&A Engineers (Pvt) Ltd.'), (71, 'CD Engineering'),
    (78, 'Cooltech'), (80, 'Metropolitan'), (81, 'Maga'), (74, 'Access'),
    (87, 'Fresco Engineering'), (86, 'ASDA Engineering'), (82, 'Monarch'),
    (84, 'Waverley Kitchens'), (89, 'Kent Engineers'), (91, 'Fentons'),
    (85, 'LTL Holdings'), (92, 'Sperrys'),
]

document = pymupdf.open(sys.argv[1])
target = Path('public/assets/clients')
target.mkdir(parents=True, exist_ok=True)
entries = []
for xref, name in logos:
    asset = document.extract_image(xref)
    filename = f'client-{xref}.{asset["ext"]}'
    (target / filename).write_bytes(asset['image'])
    entries.append(dict(name=name, src=f'/assets/clients/{filename}', width=asset['width'], height=asset['height']))

# This mark is vector artwork rather than an embedded bitmap.
hotel = document[1].get_pixmap(matrix=pymupdf.Matrix(4, 4), clip=pymupdf.Rect(297, 397, 337, 441), alpha=False)
hotel.save(str(target / 'riverina.png'))
entries.insert(32, dict(name='Riverina', src='/assets/clients/riverina.png', width=hotel.width, height=hotel.height))

Path('src/data/client-logos.ts').write_text(
    '/** Client artwork from the logo sheet supplied by the user. */\n'
    'export type ClientLogoData = { name: string; src: string; width: number; height: number };\n\n'
    'export const clientLogos: readonly ClientLogoData[] = '
    + json.dumps(entries, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
print(f'Extracted {len(entries)} client logos.')
