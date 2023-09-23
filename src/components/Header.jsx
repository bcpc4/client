import {
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
const Header = () => {
  const majors = useMemo(
    () => [
      "컴퓨터교육과🖥️",
      "경제학과📈",
      "정치외교학과⚖",
      "환경공학과🌳",
      "통계학과📊",
      "행정학과👩",
      "생명과학과🦠",
      "국어국문학과📚",
      "화학공학과💣️",
      "기계공학과⚒",
      "신소재공학과🗼",
      "더보기",
    ],
    []
  );

  useEffect(() => {
    setSelectedMajor(localStorage.getItem("major") || "전공 선택");
  }, []);

  const [selectedMajor, setSelectedMajor] = useState("");

  const handleMajorSelection = (major) => {
    // state 업데이트
    setSelectedMajor(major);
    // localStorage에 값 저장
    localStorage.setItem("major", major);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid"
      borderColor="gray.600"
      px={4}
      w="100%"
    >
      <Box display="flex" justifyContent="center" width="100%">
        <Link href="/">
          <Image
            w="150px"
            src="https://s3-alpha-sig.figma.com/img/fdee/10ba/02ea0d674ddd84ab06b07eb3342448c4?Expires=1696204800&Signature=L0~DrBoTIwlvYNVsd4IBjWX1469B9UO0Dik9vFemM1UyYyzcTB1OJbhe8aIsMX4-QY3IHp~yzOc6HytQrnj2UoPZhV0CbpSAcnPrVzkXCdhPJVuLDBFNAExyNi7AYsuz3hKqlpWNAntXjgK8tJlV~rciAAVSFpiCyuqT5k5ydcprEdSqje55607LwLTWNLFBqpzJb8phfIuk-upqSaFWWYgRRmdWdeqfcrc~ENwwyV0BkVa0XZHaZZrf9MJwSCjtPjcTrJIEtnyoeX-XKxoPw-FTmLI3uyZ7MT2NfiSr8ILZdX6OPHYaBDTh7AF2GQ7MivrOaW064ckfT9zsM91c3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="logo"
          />
        </Link>
      </Box>

      <Menu>
        <MenuButton as={Button}>{selectedMajor}</MenuButton>
        <MenuList>
          {majors.map((m) => (
            <MenuItem key={m} onClick={() => handleMajorSelection(m)}>
              {m}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Header;
