npm run build

cd dist

touch .nojekyll

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:L1ghtingBolt/l1ghtingbolt.github.io.git main

cd ..