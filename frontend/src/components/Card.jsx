// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../components/ui/carousel";

// export const Card = ({ movie: { imdbID, Poster, Title } }) => {
//   return (
//     <div className="flex flex-col h-96 w-72" key={imdbID}>
//       {/* <img
//         className="rounded-xl w-full h-64 object-cover"
//         src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
//         alt={Title}
//       /> */}
//       <Carousel>
//         <CarouselContent>
//           <CarouselItem>
//             <img
//               className="rounded-xl w-full h-64 object-cover"
//               src={
//                 Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"
//               }
//               alt={Title}
//             />
//           </CarouselItem>
//           <CarouselItem>
//             <img
//               className="rounded-xl w-full h-64 object-cover"
//               src="/img1.jpg"
//               alt={Title}
//             />
//           </CarouselItem>

//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>

//       <div className="p-4">
//         <p className="text-sm font-medium">Lonavla, India</p>
//         <div className="flex items-center">
//           <i className="fa-solid fa-star"></i>
//           <p className="text-sm font-light">5.0</p>
//         </div>
//         <p className="gray-text">63 kilometers away</p>
//         <p className="gray-text">22-27 Jul</p>
//         <p className="text-sm font-medium mt-2">₹11,000/night</p>
//       </div>
//     </div>
//   );
// };

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

export const Card = ({ movie: { imdbID, Poster, Title } }) => {
  return (
    <div>
      <div className="flex flex-col h-auto md:h-96 w-full md:w-72 overflow-hidden shadow-lg rounded-xl">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img
                className="rounded-t-xl w-full h-64 md:h-96 object-cover"
                src={
                  Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"
                }
                alt={Title}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="rounded-t-xl w-full h-64 md:h-96 object-cover"
                src="/img1.jpg"
                alt={Title}
              />
              <div className="p-4">{/* Content for Carousel Item 2 */}</div>
            </CarouselItem>
            <CarouselItem>
              <img
                className="rounded-t-xl w-full h-64 md:h-96 object-cover"
                src="/img2.jpg"
                alt={Title}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="rounded-t-xl w-full h-64 md:h-96 object-cover"
                src="/img3.jpg"
                alt={Title}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="rounded-t-xl w-full h-64 md:h-96 object-cover"
                src="/img4.jpg"
                alt={Title}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-0 z-10" />
          <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-4 md:right-0 z-10" />
        </Carousel>
      </div>
      <div className="p-4">
        <p className="text-sm font-medium">Lonavla, India</p>
        <div className="flex items-center">
          <i className="fa-solid fa-star"></i>
          <p className="text-sm font-light">5.0</p>
        </div>
        <p className="gray-text">63 kilometers away</p>
        <p className="gray-text">22-27 Jul</p>
        <p className="text-sm font-medium mt-2">₹11,000/night</p>
      </div>
    </div>
  );
};
