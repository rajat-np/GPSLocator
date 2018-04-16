export default getLocation = async () => {
  	let latsRequest = await getIndividualField('lats');
    console.log('Lats requested');
  	let longsRequest = await getIndividualField('longs');
    console.log('Longs requested');
    let latsBody = latsRequest._bodyText.toString().split('"');
  	let longsBody = longsRequest._bodyText.toString().split('"');
  	let lats = latsBody[latsBody.indexOf('field1')+2];
  	let longs = longsBody[longsBody.indexOf('field2'+2)];
  	console.log(lats, longs)
  	this.setState({
          coordinates :{
            longitude: Number(longs),
            latitude: Number(lats)
      }
    })

}
getIndividualField = (field) => {
  	if (field === 'lats'){
  		return fetch('https://thingspeak.com/channels/407273/field/1/last.json');
  	}
  	else {
  		return fetch('https://thingspeak.com/channels/407273/field/2/last.json');
  	}
}