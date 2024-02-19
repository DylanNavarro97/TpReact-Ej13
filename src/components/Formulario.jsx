import { useState } from "react";
import { Button, Form, FormControl, Row } from "react-bootstrap";

const Formulario = () => {
  const [lugarSelect, setLugarSelect] = useState({
    nombrePais: "",
    nombreLugar: "Andorra",
  });

  const opcionesPais = [
    { Pais: "Andorra", code: "ad" },
    { Pais: "Emiratos Árabes Unidos", code: "ae" },
    { Pais: "Afganistán", code: "af" },
    { Pais: "Antigua y Barbuda", code: "ag" },
    { Pais: "Anguila", code: "ai" },
    { Pais: "Albania", code: "al" },
    { Pais: "Armenia", code: "am" },
    { Pais: "Antillas Neerlandesas", code: "an" },
    { Pais: "Angola", code: "ao" },
    { Pais: "Antártida", code: "aq" },
    { Pais: "Argentina", code: "ar" },
    { Pais: "Samoa Americana", code: "as" },
    { Pais: "Austria", code: "at" },
    { Pais: "Australia", code: "au" },
    { Pais: "Aruba", code: "aw" },
    { Pais: "Islas Áland", code: "ax" },
    { Pais: "Azerbaiyán", code: "az" },
    { Pais: "Bosnia y Herzegovina", code: "ba" },
    { Pais: "Barbados", code: "bb" },
    { Pais: "Bangladesh", code: "bd" },
    { Pais: "Bélgica", code: "be" },
    { Pais: "Burkina Faso", code: "bf" },
    { Pais: "Bulgaria", code: "bg" },
    { Pais: "Bahréin", code: "bh" },
    { Pais: "Burundi", code: "bi" },
    { Pais: "Benin", code: "bj" },
    { Pais: "San Bartolomé", code: "bl" },
    { Pais: "Bermudas", code: "bm" },
    { Pais: "Brunéi", code: "bn" },
    { Pais: "Bolivia", code: "bo" },
    { Pais: "Brasil", code: "br" },
    { Pais: "Bahamas", code: "bs" },
    { Pais: "Bhután", code: "bt" },
    { Pais: "Isla Bouvet", code: "bv" },
    { Pais: "Botsuana", code: "bw" },
    { Pais: "Belarús", code: "by" },
    { Pais: "Belice", code: "bz" },
    { Pais: "Canadá", code: "ca" },
    { Pais: "Islas Cocos", code: "cc" },
    { Pais: "República Centro-Africana", code: "cf" },
    { Pais: "Congo", code: "cg" },
    { Pais: "Suiza", code: "ch" },
    { Pais: "Costa de Marfil", code: "ci" },
    { Pais: "Islas Cook", code: "ck" },
    { Pais: "Chile", code: "cl" },
    { Pais: "Camerún", code: "cm" },
    { Pais: "China", code: "cn" },
    { Pais: "Colombia", code: "co" },
    { Pais: "Costa Rica", code: "cr" },
    { Pais: "Cuba", code: "cu" },
    { Pais: "Cabo Verde", code: "cv" },
    { Pais: "Islas Christmas", code: "cx" },
    { Pais: "Chipre", code: "cy" },
    { Pais: "República Checa", code: "cz" },
    { Pais: "Alemania", code: "de" },
    { Pais: "Yibuti", code: "dj" },
    { Pais: "Dinamarca", code: "dk" },
    { Pais: "Domínica", code: "dm" },
    { Pais: "República Dominicana", code: "do" },
    { Pais: "Argel", code: "dz" },
    { Pais: "Ecuador", code: "ec" },
    { Pais: "Estonia", code: "ee" },
    { Pais: "Egipto", code: "eg" },
    { Pais: "Sahara Occidental", code: "eh" },
    { Pais: "Eritrea", code: "er" },
    { Pais: "España", code: "es" },
    { Pais: "Etiopía", code: "et" },
    { Pais: "Finlandia", code: "fi" },
    { Pais: "Fiji", code: "fji" },
    { Pais: "Islas Malvinas", code: "fk" },
    { Pais: "Micronesia", code: "fm" },
    { Pais: "Islas Faroe", code: "fo" },
    { Pais: "Francia", code: "fr" },
    { Pais: "Gabón", code: "ga" },
    { Pais: "Reino Unido", code: "gb" },
    { Pais: "Granada", code: "gd" },
    { Pais: "Georgia", code: "ge" },
    { Pais: "Guayana Francesa", code: "gf" },
    { Pais: "Guernsey", code: "gg" },
    { Pais: "Ghana", code: "gh" },
    { Pais: "Gibraltar", code: "gi" },
    { Pais: "Groenlandia", code: "gl" },
    { Pais: "Gambia", code: "gm" },
    { Pais: "Guinea", code: "gn" },
    { Pais: "Guadalupe", code: "gp" },
    { Pais: "Guinea Ecuatorial", code: "gq" },
    { Pais: "Grecia", code: "gr" },
    { Pais: "Georgia del Sur e Islas Sandwich del Sur", code: "gs" },
    { Pais: "Guatemala", code: "gt" },
    { Pais: "Guam", code: "gu" },
    { Pais: "Guinea-Bissau", code: "gw" },
    { Pais: "Guayana", code: "gy" },
    { Pais: "Honduras", code: "hn" },
    { Pais: "Croacia", code: "hr" },
    { Pais: "Haití", code: "ht" },
    { Pais: "Hungría", code: "hu" },
    { Pais: "Indonesia", code: "id" },
    { Pais: "Irlanda", code: "ie" },
    { Pais: "Israel", code: "il" },
    { Pais: "Isla de Man", code: "im" },
    { Pais: "India", code: "in" },
    { Pais: "Territorio Británico del Océano Índico", code: "io" },
    { Pais: "Irak", code: "iq" },
    { Pais: "Irán", code: "ir" },
    { Pais: "Islandia", code: "is" },
    { Pais: "Italia", code: "it" },
    { Pais: "Jersey", code: "je" },
    { Pais: "Jamaica", code: "jm" },
    { Pais: "Jordania", code: "jo" },
    { Pais: "Japón", code: "jp" },
    { Pais: "Kenia", code: "ke" },
    { Pais: "Kirguistán", code: "kg" },
    { Pais: "Camboya", code: "kh" },
    { Pais: "Kiribati", code: "ki" },
    { Pais: "Comoros", code: "km" },
    { Pais: "San Cristóbal y Nieves", code: "kn" },
    { Pais: "Corea del Norte", code: "kp" },
    { Pais: "Corea del Sur", code: "kr" },
    { Pais: "Kuwait", code: "kw" },
    { Pais: "Islas Caimán", code: "ky" },
    { Pais: "Kazajstán", code: "kz" },
    { Pais: "Laos", code: "la" },
    { Pais: "Líbano", code: "lb" },
    { Pais: "Santa Lucía", code: "lc" },
    { Pais: "Liechtenstein", code: "li" },
    { Pais: "Sri Lanka", code: "lk" },
    { Pais: "Liberia", code: "lr" },
    { Pais: "Lesotho", code: "ls" },
    { Pais: "Lituania", code: "lt" },
    { Pais: "Luxemburgo", code: "lu" },
    { Pais: "Letonia", code: "lv" },
    { Pais: "Libia", code: "ly" },
    { Pais: "Marruecos", code: "ma" },
    { Pais: "Mónaco", code: "mc" },
    { Pais: "Moldova", code: "md" },
    { Pais: "Montenegro", code: "me" },
    { Pais: "Madagascar", code: "mg" },
    { Pais: "Islas Marshall", code: "mh" },
    { Pais: "Macedonia", code: "mk" },
    { Pais: "Mali", code: "ml" },
    { Pais: "Myanmar", code: "mm" },
    { Pais: "Mongolia", code: "mn" },
    { Pais: "Macao", code: "mo" },
    { Pais: "Martinica", code: "mq" },
    { Pais: "Mauritania", code: "mr" },
    { Pais: "Montserrat", code: "ms" },
    { Pais: "Malta", code: "mt" },
    { Pais: "Mauricio", code: "mu" },
    { Pais: "Maldivas", code: "mv" },
    { Pais: "Malawi", code: "mw" },
    { Pais: "México", code: "mx" },
    { Pais: "Malasia", code: "my" },
    { Pais: "Mozambique", code: "mz" },
    { Pais: "Namibia", code: "na" },
    { Pais: "Nueva Caledonia", code: "nc" },
    { Pais: "Níger", code: "ne" },
    { Pais: "Islas Norkfolk", code: "nf" },
    { Pais: "Nigeria", code: "ng" },
    { Pais: "Nicaragua", code: "ni" },
    { Pais: "Países Bajos", code: "nl" },
    { Pais: "Noruega", code: "no" },
    { Pais: "Nepal", code: "np" },
    { Pais: "Nauru", code: "nr" },
    { Pais: "Niue", code: "nu" },
    { Pais: "Nueva Zelanda", code: "nz" },
    { Pais: "Omán", code: "om" },
    { Pais: "Panamá", code: "pa" },
    { Pais: "Perú", code: "pe" },
    { Pais: "Polinesia Francesa", code: "pf" },
    { Pais: "Papúa Nueva Guinea", code: "pg" },
    { Pais: "Filipinas", code: "ph" },
    { Pais: "Pakistán", code: "pk" },
    { Pais: "Polonia", code: "pl" },
    { Pais: "San Pedro y Miquelón", code: "pm" },
    { Pais: "Islas Pitcairn", code: "pn" },
    { Pais: "Puerto Rico", code: "pr" },
    { Pais: "Palestina", code: "ps" },
    { Pais: "Portugal", code: "pt" },
    { Pais: "Islas Palaos", code: "pw" },
    { Pais: "Paraguay", code: "py" },
    { Pais: "Qatar", code: "qa" },
    { Pais: "Reunión", code: "re" },
    { Pais: "Rumanía", code: "ro" },
    { Pais: "Serbia y Montenegro", code: "rs" },
    { Pais: "Rusia", code: "ru" },
    { Pais: "Ruanda", code: "rw" },
    { Pais: "Arabia Saudita", code: "sa" },
    { Pais: "Islas Solomón", code: "sb" },
    { Pais: "Seychelles", code: "sc" },
    { Pais: "Sudán", code: "sd" },
    { Pais: "Suecia", code: "se" },
    { Pais: "Singapur", code: "sg" },
    { Pais: "Santa Elena", code: "sh" },
    { Pais: "Eslovenia", code: "si" },
    { Pais: "Islas Svalbard y Jan Mayen", code: "sj" },
    { Pais: "Eslovaquia", code: "sk" },
    { Pais: "Sierra Leona", code: "sl" },
    { Pais: "San Marino", code: "sm" },
    { Pais: "Senegal", code: "sn" },
    { Pais: "Somalia", code: "so" },
    { Pais: "Surinam", code: "sr" },
    { Pais: "Santo Tomé y Príncipe", code: "st" },
    { Pais: "El Salvador", code: "sv" },
    { Pais: "Siria", code: "sy" },
    { Pais: "Suazilandia", code: "sz" },
    { Pais: "Islas Turcas y Caicos", code: "tc" },
    { Pais: "Chad", code: "td" },
    { Pais: "Territorios Australes Franceses", code: "tf" },
    { Pais: "Togo", code: "tg" },
    { Pais: "Tailandia", code: "th" },
    { Pais: "Tanzania", code: "tz" },
    { Pais: "Tayikistán", code: "tj" },
    { Pais: "Tokelau", code: "tk" },
    { Pais: "Timor-Leste", code: "tl" },
    { Pais: "Turkmenistán", code: "tm" },
    { Pais: "Túnez", code: "tn" },
    { Pais: "Tonga", code: "to" },
    { Pais: "Turquía", code: "tr" },
    { Pais: "Trinidad y Tobago", code: "tt" },
    { Pais: "Tuvalu", code: "tv" },
    { Pais: "Taiwán", code: "tw" },
    { Pais: "Ucrania", code: "ua" },
    { Pais: "Uganda", code: "ug" },
    { Pais: "Estados Unidos de América", code: "us" },
    { Pais: "Uruguay", code: "uy" },
    { Pais: "Uzbekistán", code: "uz" },
    { Pais: "Ciudad del Vaticano", code: "va" },
    { Pais: "San Vicente y las Granadinas", code: "vc" },
    { Pais: "Venezuela", code: "ve" },
    { Pais: "Islas Vírgenes Británicas", code: "vg" },
    { Pais: "Islas Vírgenes de los Estados Unidos de América", code: "vi" },
    { Pais: "Vietnam", code: "vn" },
    { Pais: "Vanuatu", code: "vu" },
    { Pais: "Wallis y Futuna", code: "wf" },
    { Pais: "Samoa", code: "ws" },
    { Pais: "Yemen", code: "ye" },
    { Pais: "Mayotte", code: "yt" },
    { Pais: "Sudáfrica", code: "za" },
  ];

  const handleChange = (e) => {
    setLugarSelect({
      ...lugarSelect,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    busquedaLugar();
  };

  const busquedaLugar = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${lugarSelect.nombreLugar},${lugarSelect.nombrePais}&limit=1&appid=2facc09f4169f9adf2a0d9a08ee34b30`
      );
      const data = await response.json()
      console.log(data);
    } catch (error){
      console.log(error)
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="p-1 mb-2">
      <Row className="mb-2">
        <div className="col-6">
          <label htmlFor="nombreLugar">Nombre del lugar</label>
          <FormControl
            placeholder="Ej: Buenos Aires"
            id="nombreLugar"
            name="nombreLugar"
            onChange={handleChange}
          ></FormControl>
        </div>
        <div className="col-6">
          <label htmlFor="nombrePais">Nombre de país</label>
          <Form.Select
            name="nombrePais"
            id="nombrePais"
            onChange={handleChange}
          >
            {opcionesPais.map((pais, i) => (
              <option value={pais.code} key={i}>
                {pais.Pais}
              </option>
            ))}
          </Form.Select>
        </div>
      </Row>
      <Button type="submit">Buscar</Button>
    </Form>
  );
};

export default Formulario;
