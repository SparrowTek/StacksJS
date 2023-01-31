// swift-tools-version: 5.7
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "StacksJS",
    products: [
        // Products define the executables and libraries a package produces, and make them visible to other packages.
        .library(
            name: "StacksJS",
            targets: ["StacksJS"]),
    ],
    dependencies: [],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages this package depends on.
        .target(
            name: "StacksJS",
            dependencies: [],
            exclude: [
                "package.json",
                "yarn.lock",
            ],
            resources: [
                .copy("Stacks.js"),
                .copy("node_modules"),
            ]),
    ]
)
