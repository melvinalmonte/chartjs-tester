import {
  AspectRatio,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import "./App.css";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
  ],
  datasets: [
    {
      label: "Your score",
      data: [80, 90, 60, 54, 20, 70],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Avg score",
      data: [90, 80, 70, 80, 96, 88],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="App">
      <header className="App-header">
        <div className="radar-container">
          <Radar data={data} />
          <Button variant={"solid"} colorScheme="facebook" onClick={onOpen}>
            Open Drawer
          </Button>
        </div>
      </header>
      <Drawer isOpen={isOpen} onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Some header</DrawerHeader>
          <DrawerBody>
            <AspectRatio maxW='560px' ratio={1}>
              <iframe src="https://docs.microsoft.com/video/media/62497e92-b3f6-491d-bdad-7881afd041a9/architectsuccessworkloads_high.mp4" title='azure-well-architectured' allowFullScreen/>

            </AspectRatio>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default App;
