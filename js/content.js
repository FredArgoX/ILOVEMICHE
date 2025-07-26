/* Products data */
//{'subtitle':'', 'description':'', 'flavors':[], 'table':[]}
const chamoyadas = {
    'product':'chamoyadas',
    'description':'Pulpa natural, azúcar, con chamoy',
    'content':Array(
        {'subtitle':'',
        'description':'',
        'flavors':['Limón', 'Mango', 'Maracuya', 'Pepino con Limón', 'Fresa', 'Frutos Rojos', 'Cereza', 'Tamarindo', 'Nanche', 'Guayaba', 'Grosella', 'Mandarina (temporada)'],
        'table':[
            {'option':'Sin alcohol',                      'price_litro': 70,  'price_top': 110},
            {'option':'Con Ron Bacardi',                  'price_litro': 110, 'price_top': 150},
            {'option':'Con Tequila Jose Cuervo Especial', 'price_litro': 130, 'price_top': 170},
            {'option':'Con Vodka Smirnoff',               'price_litro': 120, 'price_top': 160},
            {'option':'Con Mezcal Moskalti',              'price_litro': 120, 'price_top': 170},
        ]},
    ),
};
const cerveza = {
    'product':'cerveza',
    'description':'',
    'content':Array(
        {'subtitle':'',
        'description':'',
        'flavors':['Cubana (Limón, sal y escarcada con sal)', 'Michelada (Limón, sal y salsa de la casa)', 'Clamochela (Limón, sal, salsa de la casa y clamato 80mL)'],
        'table':[
            {'option':'Corona / Victoria',         'price_litro':95,  'price_top':145},
            {'option':'Litro con banderilla de camaron', 'price_unique':135},
        ]},
        {'subtitle':'Cerveza de 1/2',
        'description':'',
        'flavors':['Corona', 'Victoria', 'Corona Cero', 'Corona light'],
        'table':[
            {'option':' ',              'price_unique':40},
            {'option':'Vaso Preparado',           'price_unique':25},
            {'option':'Cubeta de Cerveza de 1/2', 'price_6pzas' :220, 'price_12pzas':440},
        ]},
        {'subtitle':'Clamato Preparado',
        'description':'Clamato, Limón, salsas, sal y agua mineral',
        'flavors':[],
        'table':[
            {'option':' ', 'price_litro':80,  'price_top':130},
            {'option':'Banderilla de aceitunas', 'price_unique':20},
        ]},
    ),
};
const bebidas = {
    'product':'bebidas',
    'description':'',
    'content':Array(
        {'subtitle':'Mojitos',
        'btn':true,
        'description':'Hierbabuena, limon, azucar, pulpa, Licor Ron Bacardi. Si gustas un licor diferente, varia el precio',
        'flavors':['Limon', 'Mora Azul', 'Maracuya', 'Pepino', 'Mango (temporada)'],
        'table':[
            {'option':' ', 'price_litro':110,  'price_top':150},
        ]},
        {'subtitle':'',
        'description':'',
        'flavors':['Fresa', 'Frutos Rojos', 'Vino', 'Cereza', 'Mandarina (temporada)'],
        'table':[
            {'option':' ', 'price_litro':120,  'price_top':170},
        ]},
        {'subtitle':'Piña_Colada_Frappe',
        'btn':true,
        'description':'Jugo de piña, crema de coco, azucar, Licor Ron Bacardi. Si gustas un licor diferente, varia el precio',
        'flavors':[],
        'table':[
            {'option':' ', 'price_litro':110,  'price_top':150},
        ]},
        {'subtitle':'Cuba',
        'description':'Ron Bacardi, agua mineral, coca, toque de limon',
        'flavors':['Campechano (agua mineral y coca)', 'Pintado (poca coca cola)'],
        'table':[
            {'option':' ', 'price_litro':110,  'price_top':160},
        ]},
        {'subtitle':'Whisky',
        'description':'Acompañado con agua mineral y manzanita',
        'flavors':[],
        'table':[
            {'option':'Passport',      'price_litro':170, 'price_top':220},
            {'option':'Black & White', 'price_litro':180, 'price_top':230},
            {'option':'Red Label',     'price_litro':190, 'price_top':240},
        ]},
        {'subtitle':'Jacaranda',
        'btn':true,
        'description':'Vodka Smirnoff, infusion floral, endulzante, agua mineral, limon. Cambia de color, coloca el limon y toma un color morado',
        'flavors':[],
        'table':[
            {'option':' ', 'price_litro':120,  'price_top':170},
        ]},
        {'subtitle':'Diablito',
        'btn':true,
        'description':'Vodka Smirnoff tamarindo, refresco de lima, refresco de toronja, pulpa de tamarindo. (Con paleta de tamarindo que solo aplica en el primer litro) (C/Topping no aplica paleta)',
        'flavors':[],
        'table':[
            {'option':' ', 'price_litro':130,  'price_top':180},
        ]},
        {'subtitle':'Blue_Love',
        'btn':true,
        'description':'Vodka Smirnoff, bebida energetica, refresco de lima',
        'flavors':[],
        'table':[
            {'option':' ', 'price_litro':110,  'price_top':160},
        ]},
        {'subtitle':'Bicolor',
        'btn':true,
        'description':'Vodka Smirnoff, bebida energetica, jugo de arandano, refresco de lima',
        'flavors':[],
        'table':[
            {'option':' ', 'price_litro':110,  'price_top':160},
        ]},
        {'subtitle':'Cielo_Rosa',
        'btn':true,
        'description':'Vodka Smirnoff, Algodon de azucar, refresco de lima',
        'flavors':[],
        'table':[
            {'option':' ', 'price_litro':120,  'price_top':160},
        ]},
        {'subtitle':'Consentida',
        'btn':true,
        'description':'Vodka, Limón, Jugo de sandía arizona, Refresco de lima',
        'flavors':[],
        'table':[
            {'option':' ', 'price_litro':130,  'price_top':180},
        ]},
        {'subtitle':'Margaritas Frappe',
        'description':'Tequila Jose Cuervo Especial o Mezcal Moskalti, Licor Controy, Limon, azucar y pulpa natural',
        'flavors':['Limón', 'Mango', 'Maracuya', 'Pepino con Limón', 'Fresa', 'Frutos Rojos', 'Cereza', 'Tamarindo', 'Nanche', 'Guayaba', 'Mandarina (temporada)'],
        'table':[
            {'option':' ', 'price_litro':130,  'price_top':170},
        ]},
        {'subtitle':'Paloma',
        'btn':true,
        'description':'Tequila Jose Cuervo Especial o Mezcal Moskalti, limon, sal, refresco de toronja',
        'flavors':['Limón', 'Fresa', 'Frutos rojos', 'Maracuya', 'Mango', 'Jamaica', 'Cereza'],
        'table':[
            {'option':' ', 'price_litro':130,  'price_top':170},
        ]},
        {'subtitle':'Frappe de Vino',
        'description':'Vino tinto, jugo de arandano, azucar, toque de limon',
        'flavors':[],
        'table':[
            {'option':' ', 'price_litro':90,  'price_top':140},
        ]},
        {'subtitle':'Tinto de Verano',
        'description':'Limón, endulzante, vino, refresco de lima',
        'flavors':[],
        'table':[
            {'option':' ', 'price_litro':100,  'price_top':140},
        ]},        
        {'subtitle':'Copa de Vino',
        'description':'',
        'flavors':[],
        'table':[
            {'option':'Lambrusco', 'price_unique':60},
        ]},
        {'subtitle':'Caribeñas',
        'description':'Pulpa de chamoy, limon, salsas, sal',
        'flavors':['Mango-Piña', 'Tinto', 'Durazno', 'Manzana Verde', 'Fresa'],
        'table':[
            {'option':' ', 'price_litro':100,  'price_top':140},
        ]},
        {'subtitle':'Sirena',
        'btn':true,
        'description':'Mezcal Tobala, Concentrado de Jamaica, Limon',
        'flavors':[],
        'table':[
            {'option':' ', 'price_litro':120,  'price_top':150},
        ]},
        {'subtitle':'Mezcal',
        'description':'Blanco Joven',
        'flavors':[],
        'table':[
            {'option':'Cupreata', 'price_shot':40, 'price_botella':400},
            {'option':'Espadin',  'price_shot':40, 'price_botella':400},
            {'option':'Tobala',   'price_shot':40, 'price_botella':400},
        ]},
        {'subtitle':'',
        'description':'Mezcales Amarak',
        'flavors':[],
        'table':[
            {'option':'Licor de Agave/Pechuga', 'price_shot':50, 'price_botella':500},
        ]},
        {'subtitle':'',
        'description':'Mezcales de fruta',
        'flavors':[],
        'table':[
            {'option':'Maracuya',  'price_shot':30, 'price_botella':300},
            {'option':'Jamaica',   'price_shot':30, 'price_botella':300},
            {'option':'Tamarindo', 'price_shot':30, 'price_botella':300},
        ]},
        {'subtitle':'',
        'description':'Crema de Mezcal',
        'flavors':[],
        'table':[
            {'option':'Cafe', 'price_shot':30, 'price_botella':300},
        ]},
        {'subtitle':'Carajillos',
        'description':'Cafe expresso, Licor 43',
        'flavors':[],
        'table':[
            {'option':'Shakeado', 'price_copa':150},
            {'option':'Directo',  'price_copa':150},
            {'option':'Baileys',  'price_copa':150},
            {'option':'Turin',    'price_copa':170},
        ]},
    ),
};
const topping = {
    'product':'topping',
    'description':'',
    'content':Array(
        {'subtitle':'fruta',
        'description':'',
        'flavors':[],
        'table':[
            {'id':1, 'item':'Mango'},
            {'id':2, 'item':'Pepino'},
            {'id':3, 'item':'Jicama'},
        ]},
        {'subtitle':'cacahuates',
        'description':'',
        'flavors':[],
        'table':[
            {'id':4,  'item':'Tipo hot nuts'},
            {'id':5,  'item':'Japones'},
            {'id':6,  'item':'Ajo y chile'},
            {'id':7,  'item':'Español'},
            {'id':8,  'item':'Habanero'},
            {'id':9,  'item':'Salado'},
            {'id':10, 'item':'Enchilado'},
            {'id':11, 'item':'Haba'},
            {'id':12, 'item':'Garbanzo enchilado'},
        ]},
        {'subtitle':'papas',
        'description':'',
        'flavors':[],
        'table':[
            {'id':14, 'item':'Churrumais'},
            {'id':16, 'item':'Cheetos'},
            {'id':17, 'item':'Doritos'},
            {'id':18, 'item':'Ruffles'},
            {'id':19, 'item':'Rancheritos'},
            {'id':20, 'item':'Sabritas'},
            {'id':21, 'item':'Tostachos'},
            {'id':22, 'item':'Tipo Taki'},
            {'id':23, 'item':'Churritos de ajonjoli'},
            {'id':49, 'item':'Cheetos Flamin Hot'},
        ]},
        {'subtitle':'gomitas y dulces',
        'description':'',
        'flavors':[],
        'table':[
            {'id':24, 'item':'Bolitas de tamarindo'},
            {'id':25, 'item':'Banderilla'},
            {'id':26, 'item':'Tarugo'},
            {'id':27, 'item':'Skwinkles Salsagheti'},
            {'id':28, 'item':'Paleta de goma sandia'},
            {'id':29, 'item':'Manguitos'},
            {'id':30, 'item':'Pelon'},
            {'id':31, 'item':'Pulparindo'},
            {'id':32, 'item':'Lombriz enchilada'},
            {'id':33, 'item':'Tamborcitos'},
            {'id':34, 'item':'Rockaleta'},
            {'id':35, 'item':'Picafresa'},
            {'id':36, 'item':'Gomifruta enchilada'},
            {'id':37, 'item':'Gomitas mini tajin'},
            {'id':38, 'item':'Skwinkles Clasico'},
            {'id':39, 'item':'Raqueta'},
            {'id':40, 'item':'Ricaleta'},
            {'id':41, 'item':'Lombriz dulce'},
            {'id':42, 'item':'Tira Xtremes'},
            {'id':43, 'item':'Bolitas aciditas de cereza'},
            {'id':44, 'item':'Pandita'},
        ]},
        {'subtitle':'carnes frias',
        'description':'',
        'flavors':[],
        'table':[
            {'id':46, 'item':'Camaron'},
            {'id':47, 'item':'Cueritos'},
            {'id':51, 'item':'Aceitunas'},
        ]},
    ),
};
const cubetas = {
    'product':'cubetas',
    'description':'',
    'content':Array(
        {'subtitle':'Cubeta de Mojito',
        'description':'',
        'flavors':['Frutos Rojos', 'Vino', 'Fresa', 'Cereza', 'Mandarina'],
        'table':[
            {'option':' ', 'price_local':600, 'price_domicilio':720},
        ]},
        {'subtitle':'',
        'description':'',
        'flavors':['Mango', 'Pepino', 'Mora Azul', 'Maracuya', 'Limon'],
        'table':[
            {'option':' ', 'price_local':500, 'price_domicilio':620},
        ]},
        {'subtitle':'Cubeta de Paloma',
        'description':'',
        'flavors':[],
        'table':[
            {'option':' ', 'price_local':600, 'price_domicilio':700},
        ]},
        {'subtitle':'Cubeta de Blue Love o Bicolor',
        'description':'',
        'flavors':[],
        'table':[
            {'option':' ', 'price_local':550, 'price_domicilio':670},
        ]},
    ),
};
const tablas = {
    'product':'tablas',
    'description':'',
    'content':Array(
        {'subtitle':'Tabla de Shot',
        'description':'',
        'flavors':[],
        'table':[
            {'option':'Mezcal de Sabor', 'price_unique_bullet':120},
            {'option':'Mezcal Blanco',   'price_unique_bullet':160},
            {'option':'Mezcal Pechuga',  'price_unique_bullet':200},
            {'option':'Perla Negra',     'price_unique_bullet':180},
        ]},
    ),
};
const varios = {
    'product':'varios',
    'description':'',
    'content':Array(
        {'subtitle':'',
        'description':'',
        'flavors':[],
        'table':[
            {'option':'Caribe Cooler', 'price_unique_bullet':40},
            {'option':'Agua Natural',  'price_unique_bullet':20},
            {'option':'Agua Mineral',  'price_unique_bullet':35},
            {'option':'Refresco',      'price_unique_bullet':35},
            {'option':'Cafe',          'price_unique_bullet':40},
            {'option':'Te',            'price_unique_bullet':40},
        ]},
        {'subtitle':'',
        'description':'',
        'flavors':[],
        'table':[
            {'option':'Limonada',                'price_litro':60, 'price_top':100, 'price_chica':40, 'price_chica_top':60},
            {'option':'Jugo',                    'price_litro':60, 'price_top':100, 'price_chica':40, 'price_chica_top':60},
            {'option':'Chamoyada (sin alcohol)',                                    'price_chica':40, 'price_chica_top':60},
        ]},
    ),
};
const aguachiles = {
    'product':'aguachiles',
    'description':'',
    'content':Array(
        {'subtitle':'Aguachile_Clasico_ILOVEMICHE',
        'btn':true,
        'description':'Camaron crudo, deliciosas salsas negras, salsa de aguachile verde, cebolla y pepino',
        'flavors':[],
        'table':[
            {'option':'Chico',        'price_unique_bullet':190},
            {'option':'Mediano',      'price_unique_bullet':290},
            {'option':'Familiar',     'price_unique_bullet':490},
            {'option':'Como Topping', 'price_unique_bullet':185},
        ]},
        {'subtitle':'Aguachile_Verde',
        'btn':true,
        'description':'Camaron crudo, salsa de aguachile verde, cebolla y pepino',
        'flavors':[],
        'table':[
            {'option':'Chico',        'price_unique_bullet':190},
            {'option':'Mediano',      'price_unique_bullet':290},
            {'option':'Familiar',     'price_unique_bullet':490},
            {'option':'Como Topping', 'price_unique_bullet':185},
        ]},
        {'subtitle':'Aguachile_Mango_Temporada',
        'btn':true,
        'description':'Camaron crudo, salsa de aguachile verde con mango, cebolla, pepino y mango',
        'flavors':[],
        'table':[
            {'option':'Chico',        'price_unique_bullet':190},
            {'option':'Mediano',      'price_unique_bullet':290},
            {'option':'Familiar',     'price_unique_bullet':490},
            {'option':'Como Topping', 'price_unique_bullet':195},
        ]},
        {'subtitle':'Torre Taxco',
        'description':'Camaron cristal, camaron coctelero, cebolla morada y pepino',
        'flavors':[],
        'table':[
            {'option':' ', 'price_unique':280},
        ]},
        {'subtitle':'Culichi',
        'description':'Camaron cristal, camaron coctelero, pulpo, cebolla morada y pepino',
        'flavors':[],
        'table':[
            {'option':' ', 'price_unique':280},
        ]},
    ),
};
const ceviches = {
    'product':'ceviches',
    'description':'',
    'content':Array(
        {'subtitle':'Ceviche_Clasico_ILOVEMICHE',
        'btn':true,
        'description':'Camaron crudo, clamato, deliciosas salsas negras, jitomate, cebolla, pepino y cilantro',
        'flavors':[],
        'table':[
            {'option':'Chico',        'price_unique_bullet':190},
            {'option':'Mediano',      'price_unique_bullet':290},
            {'option':'Familiar',     'price_unique_bullet':490},
            {'option':'Como Topping', 'price_unique_bullet':185},
        ]},
        {'subtitle':'Ceviche Pulpo',
        'description':'Camaron crudo, pulpo, clamato, deliciosas salsas negras, jitomate, cebolla, pepino y cilantro',
        'flavors':[],
        'table':[
            {'option':'Chico',        'price_unique_bullet':210},
            {'option':'Mediano',      'price_unique_bullet':310},
            {'option':'Familiar',     'price_unique_bullet':510},
            {'option':'Como Topping', 'price_unique_bullet':220},
        ]},
        {'subtitle':'Torre_ILOVEMICHE',
        'btn':true,
        'description':'Camaron cristal, camaron coctelero, pulpo, cebolla morada, pepino y jitomate',
        'flavors':[],
        'table':[
            {'option':' ', 'price_unique':280},
        ]},
    ),
};
const botanas = {
    'product':'botanas',
    'description':'',
    'content':Array(
        {'subtitle':'',
        'description':'',
        'flavors':[],
        'table':[
            {'option':'Bowl de 5 topping',             'price_unique_bullet':50 },            
            {'option':'Palomitas',                     'price_unique_bullet':50 },            
            {'option':'Nachos',                        'price_unique_bullet':50 },
            {'option':'Guacamole',                     'price_unique_bullet':80 },
            {'option':'Nachos de topping papas',       'price_unique_bullet':60 },
            {'option':'30 camarones cocteleros',       'price_unique_bullet':150},
            {'option':'Tenders de pollo (8 pzas)',     'price_unique_bullet':90 },
            {'option':'Papas a la francesa',           'price_unique_bullet':60 },
            {'option':'Papas a la francesa con Queso', 'price_unique_bullet':70 },
            {'option':'Sopa maruchan',                 'price_unique_bullet':50 },
            {'option':'Dedos de queso (8 pzas)',       'price_unique_bullet':100},
            {'option':'Camaron para pelar (Ch)',       'price_unique_bullet':120},
            {'option':'Camaron para pelar (Med)',      'price_unique_bullet':220},
        ]},
    ),
};
const gonzalitas = {
    'product':'gonzalitas',
    'description':'',
    'content':Array(
        // Alitas
        {'subtitle':'Alitas',
        'description':'Sencillas',
        'flavors':['(6pzas) Con verdura y aderezo'],
        'table':[
            {'option':' ', 'price_unique':130}
        ]},
        {'subtitle':'',
            'description':'DUO',
            'flavors':['(6pzas) Con una pequeña porción de papas, verdura y aderezo'],
            'table':[
            {'option':' ', 'price_unique':150}
        ]},
        {'subtitle':'',
            'description':'Combo 1',
            'flavors':['(12pzas) Acompañadas de nachos con queso, verdura y aderezo'],
            'table':[
            {'option':' ', 'price_unique':250}
        ]},
        {'subtitle':'',
            'description':'Combo 2',
            'flavors':['(20pzas) Acompañadas de nachos con queso, verdura y aderezo'],
            'table':[
            {'option':' ', 'price_unique':345}
        ]},
        {'subtitle':'',
            'description':'Combo 3',
            'flavors':['(30pzas) Acompañadas de nachos con queso/chorizo, verdura y aderezo'],
            'table':[
            {'option':' ', 'price_unique':535}
        ]},
        {'subtitle':'',
            'description':'Combo 4',
            'flavors':['(50pzas) Acompañadas de nachos con queso/chorizo, verdura y aderezo'],
            'table':[
            {'option':' ', 'price_unique':860}
        ]},
        // Hamburguesas
        {'subtitle':'Hamburguesas',
            'description':'Sencilla',
            'flavors':['Carne mixta / lechuga / jitomate / cebolla caramelizada / queso manchego'],
            'table':[
            {'option':' ', 'price_unique':130}
        ]},
        {'subtitle':'',
            'description':'Hawaiana',
            'flavors':['Carne mixta / lechuga / jitomate / piña / tocino / cebolla caramelizada / queso manchego / jamón'],
            'table':[
            {'option':' ', 'price_unique':140}
        ]},
        {'subtitle':'',
            'description':'Canadiense',
            'flavors':['Pechuga empanizada / lechuga / jitomate / cebolla caramelizada / queso manchego / tocino / salsa BBQ'],
            'table':[
            {'option':' ', 'price_unique':140}
        ]},
        {'subtitle':'',
            'description':'Taxqueña',
            'flavors':['Carne al pastor / chile morrón / piña / queso manchego / cebolla caramelizada'],
            'table':[
            {'option':' ', 'price_unique':140}
        ]},
        {'subtitle':'',
            'description':'Mexicana',
            'flavors':['Carne arrachera / lechuga / jitomate / cebolla caramelizada / queso manchego / guacamole'],
            'table':[
            {'option':' ', 'price_unique':150}
        ]},
        {'subtitle':'',
            'description':'Mamalona',
            'flavors':['Combinación de SENCILLA / HAWAIANA / CANADIENSE'],
            'table':[
            {'option':' ', 'price_unique':330}
        ]},
        // Costillas
        {'subtitle':'Costillas',
            'description':'',
            'flavors':[],
            'table':[
                {'option':'300 g', 'price_unique_bullet':155 },            
                {'option':'500 g', 'price_unique_bullet':260 },            
                {'option':'1 kg',  'price_unique_bullet':500 }
        ]},
        // Salsas
        {'subtitle':'Salsas',
            'description':'',
            'flavors':['BBQ', 'Mango', 'Mango habanero', 'Original', 'Mango Sriracha', 'Picositas', 'Pelon Pelo Rico'],
            'table':[
        ]},
        // Extra
        {'subtitle':'Extra',
            'description':'',
            'flavors':[],
            'table':[
                {'option':'Piña',                     'price_unique_bullet':20 },            
                {'option':'Queso manchego',           'price_unique_bullet':35 },            
                {'option':'Jamón',                    'price_unique_bullet':15 },
                {'option':'Tocino',                   'price_unique_bullet':20 },
                {'option':'Salsa',                    'price_unique_bullet':20 },
                {'option':'Alita',                    'price_unique_bullet':23 },
                {'option':'Carne (Mixta, Can, Tax)',  'price_unique_bullet':85 },
                {'option':'Carne (Mexicana)',         'price_unique_bullet':95 }
        ]},
    ),
};



/* Products encompasing Array */
const products_iterable = Array(
    chamoyadas,
    cerveza,
    bebidas,
    cubetas,
    tablas,
    varios,
    aguachiles,
    ceviches,
    botanas,
    gonzalitas
);



/* Products Title over red frame and Description */
products_iterable.forEach(product => {
    const html_title     = document.getElementById(`title_${product.product}`);
    html_title.innerText = product.product;
    const html_description     = document.getElementById(`description_${product.product}`);
    html_description.innerText = product.description;
});

/* Topping Title */
const html_title_topping = document.getElementById(`title_topp`);
    html_title_topping.innerText = topping.product;

/* Gonzalitas Title */
const html_title_gonzalitas = document.getElementById(`title_gonzalitas`);
    html_title_gonzalitas.innerText = gonzalitas.product;



/* Topping list creation */
html_topping_list_container = document.getElementById('topp-overlay-text');
topping.content.forEach(block => {
    const topp_subtitle = document.createElement('h3');
    topp_subtitle.innerText = block.subtitle;
    topp_subtitle.classList.add('uppercase');
    html_topping_list_container.appendChild(topp_subtitle);
    
    const topp_list = document.createElement('ul');
    block.table.forEach(row => {
        const litem = document.createElement('li');
        litem.innerText = `${row.id} ${row.item}`;
        topp_list.appendChild(litem);
    html_topping_list_container.appendChild(topp_list);
    });
});




/* Products Content */
products_iterable.forEach(product => {
    html_content = document.getElementById(`content_${product.product}`);
    js_content   = product.content;
    if (html_content && js_content) {
        js_content.forEach(block => {
            if (block.subtitle.length > 0) {
                const subtitle = document.createElement('h3');
                subtitle.innerText = block.subtitle.replace(/_/g, ' ');
                html_content.appendChild(subtitle);
                if(block.btn && block.btn==true){
                    const btn = document.createElement('button');
                    btn.innerText = 'Ver Imagenes';
                    btn.classList.add('open_btn', 'lal');
                    btn.id = `open_${block.subtitle.toLowerCase()}`;
                    html_content.appendChild(btn);
                }
            }
            if (block.description.length > 0) {
                const description = document.createElement('p');
                description.innerText = block.description;
                html_content.appendChild(description)
            }
            if (block.flavors.length > 0) {
                const flavors = document.createElement('ul');
                for (let i=0; i<block.flavors.length; i++) {
                    const flavor = block.flavors[i];
                    const li = document.createElement('li');
                    li.innerText = flavor;
                    flavors.appendChild(li);
                }
                html_content.appendChild(flavors);
            }
            if (block.table.length > 0) {
                // Table Start
                const table = document.createElement('table');
                for (let i=0; i<block.table.length; i++) {
                    
                    const item = block.table[i];

                    const tr1 = document.createElement('tr');
                    const td1 = document.createElement('td');
                    const td2 = document.createElement('td');
                    td1.classList.add('btop', 'lal');
                    td2.classList.add('btop', 'ral');

                    // Option ---     Litro $xx
                    //        --- C/Topping $xx
                    if (item.option && item.price_litro && item.price_top && !item.price_chica && !item.price_chica_top) {
                        
                        td1.textContent = item.option;
                        td2.textContent = `Litro $${item.price_litro}`;
                        tr1.appendChild(td1);
                        tr1.appendChild(td2);
                        table.appendChild(tr1);

                        const tr2 = document.createElement('tr');
                        const td3 = document.createElement('td');
                        const td4 = document.createElement('td');
                        td4.classList.add('ral');
                        td3.textContent = '';
                        td4.textContent = `C/Topping $${item.price_top}`;
                        tr2.appendChild(td3);
                        tr2.appendChild(td4);
                        table.appendChild(tr2);
                    }

                    // Option ---           $xx
                    if (item.option && item.price_unique) {

                        td1.textContent = item.option;
                        td2.textContent = `$${item.price_unique}`;
                        tr1.appendChild(td1);
                        tr1.appendChild(td2);
                        table.appendChild(tr1);
                    }

                    // Option ---     6pzas $xx
                    //        ---    12pzas $xx
                    if (item.option && item.price_6pzas && item.price_12pzas) {

                        td1.textContent = item.option;
                        td2.textContent = `6 pzas $${item.price_6pzas}`;
                        tr1.appendChild(td1);
                        tr1.appendChild(td2);
                        table.appendChild(tr1);

                        const tr2 = document.createElement('tr');
                        const td3 = document.createElement('td');
                        const td4 = document.createElement('td');
                        td4.classList.add('ral');
                        td3.textContent = '';
                        td4.textContent = `12 pzas $${item.price_12pzas}`;
                        tr2.appendChild(td3);
                        tr2.appendChild(td4);
                        table.appendChild(tr2);
                    }

                    // Option ---      Shot $xx Botella $xx
                    if (item.option && item.price_shot && item.price_botella) {

                        td1.innerHTML = `<li>${item.option}</li>`;
                        td2.textContent = `Shot $${item.price_shot} Botella $${item.price_botella}`;
                        tr1.appendChild(td1);
                        tr1.appendChild(td2);
                        table.appendChild(tr1);
                    }

                    // Option ---      Copa $xx
                    if (item.option && item.price_copa) {

                        td1.innerHTML = `<li>${item.option}</li>`;
                        td2.textContent = `Copa $${item.price_copa}`;
                        tr1.appendChild(td1);
                        tr1.appendChild(td2);
                        table.appendChild(tr1);
                    }

                    // Option ---     Local $xx
                    //        --- Domicilio $xx
                    if (item.option && item.price_local && item.price_domicilio) {

                        td1.textContent = item.option;
                        td2.textContent = `Local $${item.price_local}`;
                        tr1.appendChild(td1);
                        tr1.appendChild(td2);
                        table.appendChild(tr1);

                        const tr2 = document.createElement('tr');
                        const td3 = document.createElement('td');
                        const td4 = document.createElement('td');
                        td4.classList.add('ral');
                        td3.textContent = '';
                        td4.textContent = `Domicilio $${item.price_domicilio}`;
                        tr2.appendChild(td3);
                        tr2.appendChild(td4);
                        table.appendChild(tr2);
                    }

                    // Option ---           $xx
                    // With bullets for options
                    if (item.option && item.price_unique_bullet) {

                        td1.innerHTML = `<li>${item.option}</li>`;
                        td2.textContent = `$${item.price_unique_bullet}`;
                        tr1.appendChild(td1);
                        tr1.appendChild(td2);
                        table.appendChild(tr1);
                    }

                    // Option ---     Litro $xx
                    //        --- C/Topping $xx
                    //        ---        Ch $xx
                    //         Ch C/Topping $xx
                    if (item.option && item.price_litro && item.price_top && item.price_chica && item.price_chica_top) {

                        td1.innerHTML = `<li>${item.option}</li>`;
                        td2.textContent = `Litro $${item.price_litro}`;
                        tr1.appendChild(td1);
                        tr1.appendChild(td2);
                        table.appendChild(tr1);

                        const tr2 = document.createElement('tr');
                        const td3 = document.createElement('td');
                        const td4 = document.createElement('td');
                        td4.classList.add('ral');
                        td3.textContent = '';
                        td4.textContent = `C/Topping $${item.price_top}`;
                        tr2.appendChild(td3);
                        tr2.appendChild(td4);
                        table.appendChild(tr2);

                        const tr3 = document.createElement('tr');
                        const td5 = document.createElement('td');
                        const td6 = document.createElement('td');
                        td6.classList.add('ral');
                        td5.textContent = '';
                        td6.textContent = `Ch $${item.price_chica}`;
                        tr3.appendChild(td5);
                        tr3.appendChild(td6);
                        table.appendChild(tr3);

                        const tr4 = document.createElement('tr');
                        const td7 = document.createElement('td');
                        const td8 = document.createElement('td');
                        td8.classList.add('ral');
                        td7.textContent = '';
                        td8.textContent = `Ch C/Topping $${item.price_chica_top}`;
                        tr4.appendChild(td7);
                        tr4.appendChild(td8);
                        table.appendChild(tr4);
                    }

                    // Option ---        Ch $xx
                    //         Ch C/Topping $xx
                    if (item.option && !item.price_litro && !item.price_top && item.price_chica && item.price_chica_top) {

                        td1.innerHTML = `<li>${item.option}</li>`;
                        td2.textContent = `Ch $${item.price_chica}`;
                        tr1.appendChild(td1);
                        tr1.appendChild(td2);
                        table.appendChild(tr1);

                        const tr2 = document.createElement('tr');
                        const td3 = document.createElement('td');
                        const td4 = document.createElement('td');
                        td4.classList.add('ral');
                        td3.textContent = '';
                        td4.textContent = `Ch C/Topping $${item.price_chica_top}`;
                        tr2.appendChild(td3);
                        tr2.appendChild(td4);
                        table.appendChild(tr2);
                    }
                }
                // Table End
                html_content.appendChild(table);
                // Table Appending End
            }
        });
    }
});

