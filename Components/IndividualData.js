import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
        <>{individualExcelData.Percentage>=80&&<>
            <th>{individualExcelData.Id}</th>
            <th>{individualExcelData.Name}</th>
            <th>{individualExcelData.Day1}</th>
            <th>{individualExcelData.Day2}</th>
            <th>{individualExcelData.Day3}</th>
            <th>{individualExcelData.Day4}</th>
            <th>{individualExcelData.Day5}</th>
            <th>{individualExcelData.Day6}</th>
            <th>{individualExcelData.Day7}</th>
            <th>{individualExcelData.Day8}</th>
            <th>{individualExcelData.Day9}</th>
            <th>{individualExcelData.Day10}</th>
            <th>{individualExcelData.Total}</th>
            <th>{individualExcelData.Percentage}</th>

            </>}</>
            {/* <th>{individualExcelData.Age}</th> */}
            <th>{individualExcelData.Date}</th>
        </>
    )
}