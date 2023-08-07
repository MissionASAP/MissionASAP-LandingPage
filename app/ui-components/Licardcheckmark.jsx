/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import COCOLineTick from "./COCOLineTick";
import { Flex } from "@aws-amplify/ui-react";
export default function Licardcheckmark(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Licardcheckmark")}
      {...rest}
    >
      <COCOLineTick
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="99px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,211,134,1)"
        {...getOverrideProps(overrides, "COCO/Line/Tick")}
      ></COCOLineTick>
    </Flex>
  );
}
