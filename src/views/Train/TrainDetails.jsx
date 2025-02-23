import { useEffect, useState } from "react";
import { useParams } from "react-router"; 
import trainJsonData from "./../../config/trainData";

export default function TrainDetails() {
    const { id } = useParams();

    const [trainData, setTrainData] = useState(null);

    useEffect(() => {
        const train = trainJsonData.find((train) => train.id === parseInt(id));
        if (train) {
            setTrainData(train);
        }
    }, [id]);

    if (!trainData) {
        return <p className="text-center text-xl text-red-500">Train not found!</p>; 
    }

    return (
        <div className="w-[50%] block mx-auto border border-gray-300 shadow-lg rounded-lg p-5 mt-30 mb-10">
            <h1 className="text-3xl text-center font-bold mb-4">
                {trainData.name} ({trainData.number})
            </h1>
            <img 
                src={trainData.image} 
                alt={trainData.name} 
                className="h-[300px] block mx-auto object-cover w-full rounded-md"
            />
            <div className="flex justify-between px-4 py-3 text-lg font-medium">
                <p>Departure: {trainData.departure}</p>
                <p>Arrival: {trainData.arrival}</p>
            </div>
            <p className=" text-gray-600 px-4 mb-3 mt-1">Duration: {trainData.duration}</p>
            <p className="px-4 text-justify pb-4 text-lg">{trainData.description}</p>
        </div>
    );
}