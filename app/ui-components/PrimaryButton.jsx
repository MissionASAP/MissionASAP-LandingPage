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
export default function PrimaryButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Placeholder: {}, PrimaryButton: {} },
      variantValues: { size: "M", state: "Default" },
    },
    {
      overrides: {
        Placeholder: {},
        PrimaryButton: { backgroundColor: "rgba(146,140,171,1)" },
      },
      variantValues: { size: "M", state: "Hover" },
    },
    {
      overrides: {
        Placeholder: {},
        PrimaryButton: { backgroundColor: "rgba(35,21,91,1)" },
      },
      variantValues: { size: "M", state: "Active" },
    },
    {
      overrides: {
        Placeholder: { fontSize: "16px", lineHeight: "24px" },
        PrimaryButton: { height: "48px" },
      },
      variantValues: { size: "S", state: "Default" },
    },
    {
      overrides: {
        Placeholder: { fontSize: "16px", lineHeight: "24px" },
        PrimaryButton: {
          height: "48px",
          backgroundColor: "rgba(146,140,171,1)",
        },
      },
      variantValues: { size: "S", state: "Hover" },
    },
    {
      overrides: {
        Placeholder: { fontSize: "16px", lineHeight: "24px" },
        PrimaryButton: { height: "48px", backgroundColor: "rgba(35,21,91,1)" },
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
      borderRadius="8px"
      padding="12px 24px 12px 24px"
      backgroundColor="rgba(128,83,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "PrimaryButton")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="18px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
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
