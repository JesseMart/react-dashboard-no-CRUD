import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective,
 AccumulationSeriesDirective, PieSeries, Inject, AccumulationDataLabel
, AccumulationTooltip, AccumulationLegend  } from '@syncfusion/ej2-react-charts';


import { useStateContext } from '../../contexts/ContextProvider';



const Pie = ({ id, data, legendVisibilty, height, position}) => {

  const {currentMode} = useStateContext();

  return (
    <AccumulationChartComponent
      id={id}
      legendSettings= {{ visible: legendVisibilty, background: 'white', position: position}}
      height= {height}
      tooltip= {{ enable : true}}
      background= {currentMode === "Dark" ? '#33373E' : '#fff'}
      
    >
      <Inject services= {[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel = {{ visible: true, name: 'text', position: "Inside", font : {
            fontWeight : '600',
            color: '#fff'
          }}}
        >
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default Pie