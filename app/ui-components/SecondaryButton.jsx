/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function SecondaryButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Placeholder: {}, SecondaryButton: {} },
      variantValues: { size: "M", state: "Default" },
    },
    {
      overrides: {
        Placeholder: {},
        SecondaryButton: {
          backgroundImage:
            "linear-gradient(-45deg, rgba(247,249,254,1), rgba(251,252,255,1))",
        },
      },
      variantValues: { size: "M", state: "Hover" },
    },
    {
      overrides: {
        Placeholder: {},
        SecondaryButton: {
          border: "1px SOLID rgba(35,21,91,1)",
          backgroundColor: "rgba(35,21,91,1)",
        },
      },
      variantValues: { size: "M", state: "Active" },
    },
    {
      overrides: {
        Placeholder: { fontSize: "16px", lineHeight: "24px" },
        SecondaryButton: { height: "48px" },
      },
      variantValues: { size: "S", state: "Default" },
    },
    {
      overrides: {
        Placeholder: { fontSize: "16px", lineHeight: "24px" },
        SecondaryButton: {
          height: "48px",
          backgroundImage:
            "linear-gradient(-45deg, rgba(247,249,254,1), rgba(251,252,255,1))",
        },
      },
      variantValues: { size: "S", state: "Hover" },
    },
    {
      overrides: {
        Placeholder: { fontSize: "16px", lineHeight: "24px" },
        SecondaryButton: {
          height: "48px",
          border: "1px SOLID rgba(35,21,91,1)",
          backgroundColor: "rgba(35,21,91,1)",
        },
      },
      variantValues: { size: "S", state: "Active" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(128,83,255,1)"
      borderRadius="8px"
      padding="11px 23px 11px 23px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "SecondaryButton")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="18px"
        fontWeight="500"
        color="rgba(128,83,255,1)"
        lineHeight="28px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Placeholder"
        {...getOverrideProps(overrides, "Placeholder")}
      ></Text>
    </Flex>
  );
}
