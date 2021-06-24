function main(entry = './src/index.js', output = './dist.js') {
  fs.writeFileSync(output, pack(buildDependencyGraph(entry), entry))
}

main()
