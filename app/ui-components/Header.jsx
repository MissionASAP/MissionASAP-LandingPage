/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Logo from "./Logo";
import Menuitem from "./Menuitem";
import { Flex } from "@aws-amplify/ui-react";
import PrimaryButton from "./PrimaryButton";
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1920px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="24px 0px 24px 0px"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Flex
        gap="159px"
        direction="row"
        width="1420px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "container")}
      >
        <Logo
          display="flex"
          gap="12px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="4px 4px 4px 4px"
          {...getOverrideProps(overrides, "Logo")}
        ></Logo>
        <Flex
          gap="60px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "col/right")}
        >
          <Flex
            gap="24px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "menu")}
          >
            <Menuitem
              display="flex"
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="4px 4px 4px 4px"
              {...getOverrideProps(overrides, "menu_item11121")}
            ></Menuitem>
            <Menuitem
              display="flex"
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="4px 4px 4px 4px"
              {...getOverrideProps(overrides, "menu_item11127")}
            ></Menuitem>
          </Flex>
          <PrimaryButton
            display="flex"
            gap="10px"
            direction="row"
            width="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="8px"
            padding="12px 24px 12px 24px"
            backgroundColor="rgba(128,83,255,1)"
            size="S"
            state="Default"
            {...getOverrideProps(overrides, "Primary Button")}
          ></PrimaryButton>
        </Flex>
      </Flex>
    </Flex>
  );
}
