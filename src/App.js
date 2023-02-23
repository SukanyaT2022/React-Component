import { Box, Image, Button,Text } from '@chakra-ui/react';
import React from 'react';
import { FaHome } from 'react-icons/fa';

const App = () => {
  return (
    // control whole box
    <Box display="flex">
      {/* left side section */}
      {/* <Box bg="tomato" width="25%" py="20px" height="600px" textAlign="center"> */}
      <Box width="300px">
     
          <Box display="flex" justifyContent="center" alignItems="center" gap={2} py="30px">
            <FaHome />
            <Text>Home</Text>
          </Box>

          <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
            <FaHome />
            <Text>Home</Text>
          </Box>

          <Box display="flex" justifyContent="center" alignItems="center" gap={2}py="30px">
            <FaHome />
            <Text>Home</Text>
          </Box>

          <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
            <FaHome />
            <Text>Home</Text>
          </Box>

          <Box display="flex" justifyContent="center" alignItems="center" gap={2} py="30px">
            <FaHome />
            <Text>Home</Text>
          </Box>

          <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
            <FaHome />
            <Text>Home</Text>
          </Box>
        
      </Box>
    

      {/* middle section */}
      <Box bg="green" width="50%" py="20px" height="850px">
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
              position: 'relative',
              top: '80px',
            }}
          />
        </Box>
        <Box marginLeft="30px">
        <Image
          borderRadius="full"
          boxSize="100px"
          src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="Dan Abramov"
          sx={{
            position: 'absolute',
      
          }}
        />

        {/* when put sx it will work as css
sx={{
   position: "absolute",
   top:"80px"
  }} */}

        
</Box> 

<Box mt="160px" fontWeight="bold" marginLeft="30px">

<Text mb={2}>Look at Spider Man</Text>
<Text>@SpidermanFan</Text>
<Text mt={2}>Love to built this clone</Text>

<Box display="flex">
<FaHome />
 <Text>New York, USA</Text>
</Box>

<Box display="flex" >
<Text>999 followers</Text>
 <Text>90 following</Text>
</Box>
      </Box>


    

      <hr></hr>
{/* below line bottom part middle section */}


<Box display="flex"  pt="30px">
<Image
          borderRadius="full"
        height="50px"
        width="50px"
          src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="Dan Abramov"
        />
<Box display="flex" ml="10px" gap="10px">
<Text>Look at Spider Man</Text>
<Text>@SpidermanFan</Text>
<Text>2 months ago</Text>

</Box>


</Box> 

<Box>
<text> The epic movie</text>
</Box>


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
          <Text as="b">Who to follow</Text>
        </Box>
        <hr></hr>

        <Box display="flex" m={2} gap={5}>
          <Image
            borderRadius="full"
            boxSize="50px"
            src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="Dan Abramov"
          />
          <Box>
            <Text fontSize="15px">Roji</Text>
            <Text fontSize="15px" fontWeight="light">
              @manikanD
            </Text>
          </Box>

          <Box>
            <Button
              color="red"
              border="1px solid red"
              borderRadius="30px"
              px="20px"
            >
              Follow
            </Button>
          </Box>
        </Box>

        <hr></hr>
        <Box display="flex" m={2} gap={5}>
          <Image
            borderRadius="full"
            boxSize="50px"
            src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="Dan Abramov"
          />
          <Box>
            <Text fontSize="15px">Roji</Text>
            <Text fontSize="15px" fontWeight="light">
              @manikanD
            </Text>
          </Box>

          <Box>
            <Button
              color="red"
              border="1px solid red"
              borderRadius="30px"
              px="20px"
            >
              Follow
            </Button>
          </Box>
        </Box>

        <hr></hr>
        <Box display="flex" m={2} gap={5}>
          <Image
            borderRadius="full"
            boxSize="50px"
            src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="Dan Abramov"
          />
          <Box>
            <Text fontSize="15px">Roji</Text>
            <Text fontSize="15px" fontWeight="light">
              @manikanD
            </Text>
          </Box>

          <Box>
            <Button
              color="red"
              border="1px solid red"
              borderRadius="30px"
              px="20px"
            >
              Follow
            </Button>
          </Box>
        </Box>

        <hr></hr>

        <Box display="flex" m={2} gap={5}>
          <Image
            borderRadius="full"
            boxSize="50px"
            src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="Dan Abramov"
          />
          <Box>
            <Text fontSize="15px">Roji</Text>
            <Text fontSize="15px" fontWeight="light">
              @manikanD
            </Text>
          </Box>
          <hr></hr>

          <Box>
            <Button
              color="red"
              border="1px solid red"
              borderRadius="30px"
              px="20px"
            >
              Follow
            </Button>
          </Box>
        </Box>
        <hr></hr>
      </Box>
    </Box>
  );
};

export default App;
