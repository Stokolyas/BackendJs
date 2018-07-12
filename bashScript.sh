mkdir tasks
touch task1.txt
touch task2.txt
ls
ls | tee task3.txt
cp task3.txt task4.txt
echo "***task4.txt***"
more task4.txt
echo "------"
ps > task1
grep user task1.txt > task2.txt