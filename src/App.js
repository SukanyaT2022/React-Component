import { Box, Image, Button,Text } from '@chakra-ui/react';
import React from 'react';

const App = () => {
  return (
    // control whole box
    <Box display="flex">
      {/* left side section */}
      <Box bg="tomato" width="25%" py="20px" height="600px" textAlign="center">
        <Box pb="20px">
          <h5>Home</h5>
        </Box>
        <Box pb="20px">
          <h5>Explore</h5>
        </Box>
        <Box pb="20px">
          <h5>Notifications</h5>
        </Box>
        <Box pb="20px">
          <h5>Bookmarks</h5>
        </Box>

        <Box pb="20px">
          <h5>Profile</h5>
        </Box>

        <Box pb="20px">
          <h5>More</h5>
        </Box>
      </Box>

      {/* middle section */}
      <Box bg="green" width="50%" py="20px" height="600px">
        <Box paddingLeft="30px" my={4}>
          <h5 font-weight="bolder">SpidermanHaHa</h5>
          <h6>9 Tweets</h6>
        </Box>

        <Box>
          <Image
            src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            width="100%"
            height="300px"
            objectFit="cover"
            alt="spiderman"

            sx={{
              position: "relative",
              top:"80px"
             }}

          />
        </Box>
        <Image
  borderRadius='full'
  boxSize='100px'
  src='https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  alt='Dan Abramov'
  sx={{
   position: "absolute",
   bottom:"50px"
  }}

/>

{/* when put sx it will work as css
sx={{
   position: "absolute",
   top:"80px"
  }} */}



    
        {/* <Box display="flex">
  <Box width="50%" height="100px">
<h5>Moji</h5>
<h5>This guy is so coll.</h5>
</Box>

<Box width="50%" height="100px">
<Button colorScheme='blue' >Follow</Button>
</Box> */}
      </Box>

      {/* right section */}
      <Box
        bg="lightgrey"
        width="25%"
        py="20px"
        height="600px"
        paddingLeft="30px"
      >
        <Box pb="20px">
        <Text as='b'>Who to follow</Text>
        </Box>
        <hr></hr>



        <Box  display="flex" m={2} gap={5}>
         
<Image
  borderRadius='full'
  boxSize='50px'
  src='https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  alt='Dan Abramov'
/>
<Box>
<Text fontSize='15px'  >
Roji 

</Text>
<Text fontSize='15px' fontWeight="light"  >
@manikanD

</Text>

</Box>

<Box>
<Button color="red" border="1px solid red" borderRadius="30px" px="20px">Follow</Button>

</Box>

        </Box>

        <hr></hr>
        <Box  display="flex" m={2} gap={5}>
         
         <Image
           borderRadius='full'
           boxSize='50px'
           src='https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
           alt='Dan Abramov'
         />
         <Box>
         <Text fontSize='15px'  >
         Roji 
         
         </Text>
         <Text fontSize='15px' fontWeight="light"  >
         @manikanD
         
         </Text>
         
         </Box>
         
         <Box>
         <Button color="red" border="1px solid red" borderRadius="30px" px="20px">Follow</Button>
         
         </Box>
         
                 </Box>

        <hr></hr>
        <Box  display="flex" m={2} gap={5}>
         
<Image
  borderRadius='full'
  boxSize='50px'
  src='https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  alt='Dan Abramov'
/>
<Box>
<Text fontSize='15px'  >
Roji 

</Text>
<Text fontSize='15px' fontWeight="light"  >
@manikanD

</Text>

</Box>

<Box>
<Button color="red" border="1px solid red" borderRadius="30px" px="20px">Follow</Button>

</Box>

        </Box>

        <hr></hr>


        <Box  display="flex" m={2} gap={5}>
         
         <Image
           borderRadius='full'
           boxSize='50px'
           src='https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
           alt='Dan Abramov'
         />
         <Box>
         <Text fontSize='15px'  >
         Roji 
         
         </Text>
         <Text fontSize='15px' fontWeight="light"  >
         @manikanD
         
         </Text>
         
         </Box>
         <hr></hr>
         
         <Box>
         <Button color="red" border="1px solid red" borderRadius="30px" px="20px">Follow</Button>
         
         </Box>
         
                 </Box>
        <hr></hr>
      </Box>
    </Box>
  );
};

export default App;
