import {
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";

const Header = () => {
  const majors = useMemo(
    () => [
      "컴퓨터",
      "경제",
      "정치외교학과",
      "환경",
      "기업",
      "젠더",
      "반려동물",
      "예술",
      "역사",
      "노동",
      "청소년",
      "가정",
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
        <Image
          w="150px"
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/121784261/270038579-1a0fa218-6aa0-4604-b9f3-55ee1133b58b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230922T193054Z&X-Amz-Expires=300&X-Amz-Signature=694c5998a4be867af625fcdceeeb09a4094b52f6517e844e0f83cee50d0aa438&X-Amz-SignedHeaders=host&actor_id=121784261&key_id=0&repo_id=695155075"
        />
      </Box>

      <Menu>
        <MenuButton as={Button}>{localStorage.getItem("major")}</MenuButton>
        <MenuList>
          {majors.map((m) => (
            <MenuItem onClick={() => handleMajorSelection(m)}>{m}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Header;
