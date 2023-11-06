"use client";

import Homepage from "@/pages/home-page";
import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";

export default function Home() {
  return <Auth component={<Homepage />} type={AUTH.ONLY_PUBLIC} />;
}


// import Link from 'next/link';
// import Image from 'next/image';
// import { useState } from 'react';
// import { Icons, Images } from '@/common/assets';
// import Container from '@mui/material/Container';
// import { StyledHompage } from "@/common/styles/home-page";

// export default function Home() {
//   const [value, setValue] = useState("")

//   return (
//     <StyledHompage>
//       <div className='content'>
//         <Container>
//           <div className='heading'>
//             <Image src={Icons.logo} alt='logo' />
//           </div>
//         </Container>
//         <div className='content_center'>
//           <p className='coming-soon'>Coming Soon</p>
//           <div className='content_center_invoiceMoto'>
//             <Image src={Images.invoiceMoto} alt='invoice-moto' />
//           </div>
//           <div className='content_center_form'>
//             <form>
//               <p className='join-now'>Join now to be the first to know about our events</p>
//               <div className='form-field'>
//                 <input
//                   type="text"
//                   value={value}
//                   placeholder='Email'
//                   onChange={(e) => setValue(e.target.value)}
//                 />
//                 <button
//                   type='button'
//                   onClick={() => setValue("")}
//                 >
//                   Join
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className='content_social-icons'>
//           <Link href='#'>
//             <Image src={Icons.linkedin} alt='linkedin' />
//           </Link>
//           <Link href='#'>
//             <Image src={Icons.facebook} alt='facebook' />
//           </Link>
//           <Link href='#'>
//             <Image src={Icons.instagram} alt='instagram' />
//           </Link>
//           <Link href='#'>
//             <Image src={Icons.youtube} alt='youtube' />
//           </Link>
//         </div>
//       </div>
//       <div className='background-video'>
//         <video src="bg-video.mp4" muted autoPlay loop></video>
//       </div>
//     </StyledHompage>
//   )
// }