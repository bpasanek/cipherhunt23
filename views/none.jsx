var React = require('react');
var HorizontalBarGraph = require('@chartiful/react-horizontal-bar-graph').default

function HelloMessage(props) {
    const rawArr = JSON.parse(props?.data).values
    console.log(rawArr)
    const cleanArr = rawArr.filter((team, idx) =>{
        return (team[0] != " " && team[1] != " " && idx != 0)
    })
    const formattedData = cleanArr.map((team)=>{
        return {y: team[1], label: team[0]}
    })
    console.log(cleanArr)
    
  return (
        <div style= {{"backgroundColor": "black", "color": "white", "textAlign": "center", "height": "100%"}}>
            <h1>
                <div>Criss | Cross | Verse: A Cipher Hunt</div>
            </h1>
            <div>
            <HorizontalBarGraph
  data={[125, 100, 50, 75, 100, 125]}
  width={500}
  height={300}
  barRadius={7}
  barColor='#82d551'
  baseConfig={{
    hasYAxisBackgroundLines: false,
    xAxisLabelStyle: {
      rotation: 0,
      fontSize: 11,
      width: 60,
      yOffset: 4,
      xOffset: -12
    },
    yAxisLabelStyle: {
      rotation: 30,
      fontSize: 13,
      prefix: '$',
      position: 'bottom',
      xOffset: 15,
      yOffset: -10,
      decimals: 2,
      height: 50
    }
  }}
  style={{
    marginBottom: 30,
    padding: 10,
    paddingTop: 20,
    borderRadius: 20,
    width: 500,
    backgroundColor: `#e1f5d6`
  }}
/>
</div>
            <h3>Instructions</h3>
            <p5 style={{"margin-left": "10%"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Instructions will mention QR codes. Note, no direct links from hints to QR Code pages!!! But I'm adding a symulink from here to show structure of site. Pretend that landing on QR Code 1 was triggered by scanning the first QR code. Solving that cipher will take you to next hint, even if it hasn't been released yet.
            </p5>
            <p6>
                {cleanArr.map((team) =>{
                    return(
                        <ul>
                            <div>{team[0]}</div>
                            <div>{team[1]}</div>
                        </ul>
                    )
                })}
            </p6>
        </div>
  )
}

module.exports = HelloMessage;