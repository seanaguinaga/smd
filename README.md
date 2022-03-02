# SMD Stack

NextJS + Expo + easily styled/animated shared components = _very_ close to one codebase

## The Stack

- [Solito](https://solito.vercel.app/)
- [Moti](https://moti.fyi/)
- [Dripsy](https://www.dripsy.xyz/)

## Install

`yarn`

## Scripts

- `yarn dev:web`
- `yarn dev:mobile` in another tab
- `yarn dev:desktop` in another tab (after `dev:web` has fired up and http://localhost:3000 is available)

## Walkthrough

- `workspaces/app` is where you make all your shared components
- `workspaces/web` is your NextJS app
- `workspaces/mobile` is your Expo app

## Credit

Big thank you to [@kuk941025](https://github.com/kuk941025) for providing [most of the code](https://github.com/kuk941025/mono-solito-example) in this repo and helping me make sense of this stack. ❤️