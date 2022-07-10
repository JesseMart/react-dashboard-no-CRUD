import React from 'react'
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective, Inject, AccumulationDataLabel
  , AccumulationTooltip, AccumulationLegend, AccumulationSelection, PyramidSeries
} from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider'
import { PyramidData } from '../../data/dummy'
import { Header } from '../../components'



const Pyramid = () => {

  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Pyramid" title="AAPLE Historical" />
      <div className='w-full'>
        <AccumulationChartComponent
        id='pyramid-chart'
        legendSettings={{ background : 'white'}}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? '#33373E' : '#fff'}

        >
          <Inject services={[PyramidSeries, AccumulationSelection, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              type="Pyramid"
              width='45%'
              height='80%'
              neckHeight='15%'
              gapRatio={0.03}
              xName="x"
              yName="y"
              explode
              emptyPointSettings={{ mode: 'Drop', fill:'red'}}
              dataLabel={{
                visible: true, name: 'text', position: "Inside", 
              }}
            >
            </AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pyramid