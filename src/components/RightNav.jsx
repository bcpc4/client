import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const RightNav = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const sProgress = parseFloat(localStorage.getItem('progress') ?? '0');
      if (!isNaN(sProgress)) {
        setProgress(sProgress);
      }
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Flex
      direction='column'
      gap='20px'
      padding='20px 12px'
      w='264px'
      h='calc(100vh - 60px)'
      bg='#164330'
    >
      <Box
        color='white'
        textAlign='center'
        fontFamily='Roboto'
        fontSize='30px'
        fontStyle='normal'
        fontWeight='700'
        lineHeight='30px'
      >
        Master
      </Box>
      <Box
        color='white'
        textAlign='center'
        fontFamily='Roboto'
        fontSize='26px'
        fontStyle='normal'
        fontWeight='700'
        lineHeight='30px'
      >
        Lv. {progress}
      </Box>
      <Image
        h='200px'
        w='182px'
        marginLeft='auto'
        marginRight='auto'
        borderRadius='30%'
        //borderRadius={`${progress}%`}
        flexShrink={0}
        alt='은행레벨'
        src='https://s3-alpha-sig.figma.com/img/f6fc/093c/bcaa620e990f356aa6ecdca283792808?Expires=1696204800&Signature=qPN00wY9MX0KIh8vcf77Ejnp1gEoDG9EjToY~iB1rbqC3GI5bticsm8gDhx8onYWNNZPUCMqHvsmdg3rL1ajmc40hyXRv01uQinkZZsInC9GQOvel6o511n1aOusqK88o4THKXzGT137BwDUpV99uZf~ZddcHkY4Y-qNgdJKUXsZKwZJ08Is3u583MX0374I-yggs69H9XYi6ewqVDB6PMg57fGq1SuspPXfJawMa8Zehigk1Fmdr3KMO0DzfrNCenXSVUf0S6L4wcBLDl1Q3qOZyS3W~ZnafJQHJNDFLP0bhO1Z6H47UYItXEtFahNn-XfXHwfZ~cVTbN6OCN0mOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
      />
      <Box display='flex' mt='4' mb='4' ml='55' alignItems='center'>
        <CircularProgress
          value={progress}
          ml='2'
          thickness='15px'
          color='#569E54'
          transform='scale(1.75)'
        >
          <CircularProgressLabel color='#ddd34a'>
            {progress}%
          </CircularProgressLabel>
        </CircularProgress>
        <Image
          h='53px'
          w='53px'
          ml='20px'
          float='right'
          alt='물을주자'
          src='https://s3-alpha-sig.figma.com/img/ee64/50d3/e244d2232639df58ab881b418190276f?Expires=1696204800&Signature=Aj~G7mOFTgenDCdZwu3xLesTTiBrFYpvPoCySa3sBr3H9kXjcZtys0V23WpJp-JwTk5NX1LmmnFYHgzcYYa4vnH1xWMP5q0OOFe6HtTFsUI4ijhAZebBhyxVRbMLN0DIRZrpuBHdfXuKiOcqKnSa-E~QQvoMy9w0egKz~4VxtRjWjjTT7cEfJwsRgb7Fqze~y~yX3AX9~yv2s5z8XYJ~mN5y1tlQpfqAXnpP-ddyNZAjNHXmLS4OclIAqBItR5~~zAmu-5aDgj0qFR9w1CpGib70jvcJhpzR~y~UXxTwdUCBn2Xuw-nWB-4YvD-KjhYKfatDU5Qs3eanf2Pj~Tbizw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          //src={{progress}==100 ?"https://s3-alpha-sig.figma.com/img/ee64/50d3/e244d2232639df58ab881b418190276f?Expires=1696204800&Signature=Aj~G7mOFTgenDCdZwu3xLesTTiBrFYpvPoCySa3sBr3H9kXjcZtys0V23WpJp-JwTk5NX1LmmnFYHgzcYYa4vnH1xWMP5q0OOFe6HtTFsUI4ijhAZebBhyxVRbMLN0DIRZrpuBHdfXuKiOcqKnSa-E~QQvoMy9w0egKz~4VxtRjWjjTT7cEfJwsRgb7Fqze~y~yX3AX9~yv2s5z8XYJ~mN5y1tlQpfqAXnpP-ddyNZAjNHXmLS4OclIAqBItR5~~zAmu-5aDgj0qFR9w1CpGib70jvcJhpzR~y~UXxTwdUCBn2Xuw-nWB-4YvD-KjhYKfatDU5Qs3eanf2Pj~Tbizw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" :"https://s3-alpha-sig.figma.com/img/8c4e/79db/fe92f5f33bfbb8b899a407ea658fcc51?Expires=1696204800&Signature=GGdgn-YCVclVwsQVk0LBwoC8xaJR5IcHtRS11oUNLnu5PZNMhcDFHqCsLPgZ-KGNs2pGj6GmfgBcS~YhCjX~7tpM1PlkoWd5m36kTnns6w8j8DMD~JAxXvNs-EtZlaLqKMDB0irAHjN67~ZYnodSYw5SFTeAeRUpr682Fx3KXedwobhva0DpgRvXvLVeyn~tE15POIM3U0acxLj454BzON8BiEb8tEF5v3jh2eQ6fwL6Ts81LG5WobiZr9EZcfg2Di0FT7T7OF9oAD0WTQgcwjUaBZ0xpK2xhBwokW4rT4iNC5WxXTp4eOEXCqeLkEGhywfkvEBmlwfQ~X3JnVsblA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
        />
      </Box>
      <Link href='/review'>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          bg='#569E54'
          color='#FFF4CD'
          textAlign='center'
          fontFamily='Roboto'
          fontSize='lg'
          fontStyle='normal'
          fontWeight='700'
          lineHeight='56px'
          height='56px'
          flexShrink={0}
          borderRadius='10px'
          boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
        >
          오답노트
        </Box>
      </Link>
    </Flex>
  );
};

export default RightNav;
