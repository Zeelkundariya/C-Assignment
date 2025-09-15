#include <stdio.h>

int main()
{
    int n=10;
    for(int i=1;i<=n;i=i+2)
    {
        for(int j=i;j<=n;j++)
        {
    
            printf(" ");
        }
        for(int j=1;j<=i;j++)
        {
            printf("%d ",j);
        }
        printf("\n");
    }
    

    return 0;
}