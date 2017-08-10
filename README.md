# Shows how Angular AOT is broken with angular-prism

> ng buildprod
	> npm run build

	> coreui-angular-prism-brokenaot@1.0.0-alpha.6 build /home/richard/src/r3kdotio/core-ui-angular/Angular4_CLI_Starter
	> ng build --prod

	Hash: 96b348905c63b6826463                                                              
	Time: 16655ms
	chunk    {0} polyfills.d58d6de4c04bffbc62f3.bundle.js (polyfills) 235 kB {5} [initial] [rendered]
	chunk    {1} scripts.69770b6a7723cf4ef8d5.bundle.js (scripts) 357 kB {5} [initial] [rendered]
	chunk    {2} main.80b784b44783cb971f30.bundle.js (main) 1 kB {4} [initial] [rendered]
	chunk    {3} styles.700ee8ab1d3c0ee812f2.bundle.css (styles) 69 bytes {5} [initial] [rendered]
	chunk    {4} vendor.f8144717f139309b5d8f.bundle.js (vendor) 848 kB [initial] [rendered]
	chunk    {5} inline.459a73ae83302fa6320f.bundle.js (inline) 0 bytes [entry] [rendered]

	ERROR in Unexpected value 'PrismComponent in /home/richard/src/r3kdotio/core-ui-angular/Angular4_CLI_Starter/node_modules/angular-prism/dist/angular-prism.js' declared by the module 'DashboardModule in /home/richard/src/r3kdotio/core-ui-angular/Angular4_CLI_Starter/src/app/dashboard/dashboard.module.ts'. Please add a @Pipe/@Directive/@Component annotation.

	ERROR in ./src/main.ts
	Module not found: Error: Can't resolve './$$_gendir/app/app.module.ngfactory' in '/home/richard/src/r3kdotio/core-ui-angular/Angular4_CLI_Starter/src'
	 @ ./src/main.ts 3:0-74
	 @ multi ./src/main.ts

